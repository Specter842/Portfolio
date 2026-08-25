const LEETCODE_USERNAME = "Specter842";

const QUERY = `
  query userProfileCalendar($username: String!) {
    matchedUser(username: $username) {
      userCalendar {
        submissionCalendar
      }
    }
  }
`;

type LeetCodeGraphqlResponse = {
  data?: {
    matchedUser: {
      userCalendar: { submissionCalendar: string };
    } | null;
  };
  errors?: { message: string }[];
};

// Returns a map of "YYYY-MM-DD" -> submission count for every day the user
// has submitted on. Empty map if the account has no activity yet (or the
// API is unreachable) -- that's a valid, expected state, not an error.
export async function getLeetCodeCalendar(): Promise<Map<string, number>> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY, variables: { username: LEETCODE_USERNAME } }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) return new Map();

    const json: LeetCodeGraphqlResponse = await res.json();
    const raw = json.data?.matchedUser?.userCalendar?.submissionCalendar;
    if (json.errors || !raw) return new Map();

    const parsed: Record<string, number> = JSON.parse(raw);
    const map = new Map<string, number>();
    for (const [ts, count] of Object.entries(parsed)) {
      const date = new Date(Number(ts) * 1000).toISOString().slice(0, 10);
      map.set(date, (map.get(date) ?? 0) + count);
    }
    return map;
  } catch {
    return new Map();
  }
}
