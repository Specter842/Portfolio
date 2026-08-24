type WakaTimeLanguage = {
  name: string;
  percent: number;
  text: string;
};

type WakaTimeStatsResponse = {
  data?: {
    status?: string;
    human_readable_total?: string;
    human_readable_daily_average?: string;
    total_seconds?: number;
    languages?: WakaTimeLanguage[];
  };
};

function formatDuration(totalSeconds: number): string {
  const totalMinutes = Math.round(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes} mins`;
  return `${hours} hrs ${minutes} mins`;
}

export type WakaTimeStats = {
  weekTotal: string;
  dailyAvg: string;
  languages: { name: string; time: string; pct: number }[];
};

type WakaTimeTodayResponse = {
  data?: {
    grand_total?: { text?: string };
  };
};

export async function getWakaTimeToday(): Promise<string | null> {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) return null;

  try {
    const auth = Buffer.from(`${apiKey}:`).toString("base64");
    const res = await fetch("https://wakatime.com/api/v1/users/current/status_bar/today", {
      headers: { Authorization: `Basic ${auth}` },
      next: { revalidate: 300 },
    });

    if (!res.ok) return null;

    const json: WakaTimeTodayResponse = await res.json();
    return json.data?.grand_total?.text ?? null;
  } catch {
    return null;
  }
}

export async function getWakaTimeStats(): Promise<WakaTimeStats | null> {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) return null;

  try {
    const auth = Buffer.from(`${apiKey}:`).toString("base64");
    const res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
      headers: { Authorization: `Basic ${auth}` },
      next: { revalidate: 300 },
    });

    if (!res.ok) return null;

    const json: WakaTimeStatsResponse = await res.json();
    const data = json.data;
    if (!data || data.status !== "ok") return null;

    const totalSeconds = data.total_seconds ?? 0;

    return {
      weekTotal: data.human_readable_total ?? "—",
      dailyAvg: data.human_readable_daily_average ?? "—",
      // Derive each language's time from its share of the real total instead of
      // WakaTime's raw per-language seconds, which can sum to more than the total
      // when overlapping heartbeats get attributed to multiple languages.
      languages: (data.languages ?? []).slice(0, 5).map((l) => ({
        name: l.name,
        time: formatDuration((l.percent / 100) * totalSeconds),
        pct: Math.round(l.percent),
      })),
    };
  } catch {
    return null;
  }
}
