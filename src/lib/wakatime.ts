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
    languages?: WakaTimeLanguage[];
  };
};

export type WakaTimeStats = {
  weekTotal: string;
  dailyAvg: string;
  languages: { name: string; time: string; pct: number }[];
};

export async function getWakaTimeStats(): Promise<WakaTimeStats | null> {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) return null;

  try {
    const auth = Buffer.from(`${apiKey}:`).toString("base64");
    const res = await fetch("https://wakatime.com/api/v1/users/current/stats/last_7_days", {
      headers: { Authorization: `Basic ${auth}` },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const json: WakaTimeStatsResponse = await res.json();
    const data = json.data;
    if (!data || data.status !== "ok") return null;

    return {
      weekTotal: data.human_readable_total ?? "—",
      dailyAvg: data.human_readable_daily_average ?? "—",
      languages: (data.languages ?? []).slice(0, 5).map((l) => ({
        name: l.name,
        time: l.text,
        pct: Math.round(l.percent),
      })),
    };
  } catch {
    return null;
  }
}
