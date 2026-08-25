const GITHUB_USERNAME = "Specter842";

const QUERY = `
  query($login: String!) {
    user(login: $login) {
      followers { totalCount }
      repositories(first: 100, isFork: false, privacy: PUBLIC, ownerAffiliations: OWNER) {
        totalCount
        nodes {
          stargazerCount
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            edges {
              size
              node { name }
            }
          }
        }
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

type ContributionDay = { date: string; contributionCount: number };

type RepoLanguageEdge = { size: number; node: { name: string } };
type RepoNode = { stargazerCount: number; languages: { edges: RepoLanguageEdge[] } };

type GithubGraphqlResponse = {
  data?: {
    user: {
      followers: { totalCount: number };
      repositories: { totalCount: number; nodes: RepoNode[] };
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: { contributionDays: ContributionDay[] }[];
        };
      };
    } | null;
  };
  errors?: { message: string }[];
};

export type GithubStats = {
  currentStreak: number;
  longestStreak: number;
  contributions: number;
  activeDays: number;
  busiestDay: number;
  repositories: number;
  stars: number;
  followers: number;
  languages: { name: string; pct: number }[];
  calendar: { date: string; count: number }[];
};

function computeStreaks(days: ContributionDay[]) {
  let longest = 0;
  let running = 0;
  for (const day of days) {
    if (day.contributionCount > 0) {
      running += 1;
      longest = Math.max(longest, running);
    } else {
      running = 0;
    }
  }

  let current = 0;
  let i = days.length - 1;
  // an empty "today" doesn't break a streak that's still in progress
  if (i >= 0 && days[i].contributionCount === 0) i -= 1;
  while (i >= 0 && days[i].contributionCount > 0) {
    current += 1;
    i -= 1;
  }

  return { current, longest };
}

export async function getGithubStats(): Promise<GithubStats | null> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: QUERY, variables: { login: GITHUB_USERNAME } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json: GithubGraphqlResponse = await res.json();
    if (json.errors || !json.data?.user) return null;

    const { user } = json.data;
    const days = user.contributionsCollection.contributionCalendar.weeks.flatMap(
      (w) => w.contributionDays
    );
    const streaks = computeStreaks(days);
    const activeDays = days.filter((d) => d.contributionCount > 0).length;
    const busiestDay = days.reduce((max, d) => Math.max(max, d.contributionCount), 0);
    const stars = user.repositories.nodes.reduce((sum, r) => sum + r.stargazerCount, 0);

    const languageBytes = new Map<string, number>();
    for (const repo of user.repositories.nodes) {
      for (const edge of repo.languages.edges) {
        languageBytes.set(edge.node.name, (languageBytes.get(edge.node.name) ?? 0) + edge.size);
      }
    }
    const totalBytes = [...languageBytes.values()].reduce((sum, b) => sum + b, 0);
    const languages = [...languageBytes.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([name, bytes]) => ({
        name,
        pct: totalBytes > 0 ? Math.round((bytes / totalBytes) * 100) : 0,
      }));

    return {
      currentStreak: streaks.current,
      longestStreak: streaks.longest,
      contributions: user.contributionsCollection.contributionCalendar.totalContributions,
      activeDays,
      busiestDay,
      repositories: user.repositories.totalCount,
      stars,
      followers: user.followers.totalCount,
      languages,
      calendar: days.map((d) => ({ date: d.date, count: d.contributionCount })),
    };
  } catch {
    return null;
  }
}
