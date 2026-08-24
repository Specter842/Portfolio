type WakaTimeDayLanguage = {
  name: string;
  total_seconds: number;
};

type WakaTimeDaySummary = {
  grand_total?: { total_seconds?: number; text?: string };
  languages?: WakaTimeDayLanguage[];
  range?: { date?: string };
};

type WakaTimeSummariesResponse = {
  data?: WakaTimeDaySummary[];
};

export type WakaTimeStats = {
  weekTotal: string;
  dailyAvg: string;
  codedToday: string;
  languages: { name: string; time: string; pct: number }[];
};

function formatDuration(totalSeconds: number): string {
  const totalMinutes = Math.round(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes} mins`;
  return `${hours} hrs ${minutes} mins`;
}

function toDateString(d: Date): string {
  return d.toISOString().slice(0, 10);
}

// Fetches the last 7 days as a single atomic call, so "today" and "this week"
// (and the language breakdown) are always internally consistent -- today can
// never appear larger than the week total, since it's derived from the same
// snapshot rather than two separately-cached endpoints drifting apart.
export async function getWakaTimeWeekSummary(): Promise<WakaTimeStats | null> {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) return null;

  try {
    const end = new Date();
    const start = new Date(end);
    start.setDate(start.getDate() - 6);

    const auth = Buffer.from(`${apiKey}:`).toString("base64");
    const url = `https://wakatime.com/api/v1/users/current/summaries?start=${toDateString(start)}&end=${toDateString(end)}`;
    const res = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
      next: { revalidate: 300 },
    });

    if (!res.ok) return null;

    const json: WakaTimeSummariesResponse = await res.json();
    const days = json.data;
    if (!days || days.length === 0) return null;

    const weekTotalSeconds = days.reduce((sum, d) => sum + (d.grand_total?.total_seconds ?? 0), 0);
    const today = days[days.length - 1];

    const languageTotals = new Map<string, number>();
    for (const day of days) {
      for (const lang of day.languages ?? []) {
        languageTotals.set(lang.name, (languageTotals.get(lang.name) ?? 0) + lang.total_seconds);
      }
    }
    const languages = [...languageTotals.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, seconds]) => ({
        name,
        time: formatDuration(seconds),
        pct: weekTotalSeconds > 0 ? Math.round((seconds / weekTotalSeconds) * 100) : 0,
      }));

    return {
      weekTotal: formatDuration(weekTotalSeconds),
      dailyAvg: formatDuration(weekTotalSeconds / days.length),
      codedToday: today.grand_total?.text ?? formatDuration(today.grand_total?.total_seconds ?? 0),
      languages,
    };
  } catch {
    return null;
  }
}
