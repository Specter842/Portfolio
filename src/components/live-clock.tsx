"use client";

import { useEffect, useState } from "react";

function greeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

type LiveClockProps = {
  codedToday: string | null;
  weekTotal: string | null;
  dailyAvg: string | null;
  languages: { name: string }[];
};

export function LiveClock({ codedToday, weekTotal, dailyAvg, languages }: LiveClockProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- sets client time once to avoid SSR mismatch, then ticks
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
    : "";

  return (
    <div className="min-w-0 rounded-2xl border border-border bg-background p-5">
      <p className="text-sm text-muted-foreground">{now ? greeting(now.getHours()) : ""}</p>
      <p className="mt-1 font-mono text-2xl font-semibold">{time}</p>
      <p className="mt-3 text-xs text-muted-foreground">
        <span className="font-mono text-foreground">{codedToday ?? "—"}</span> coded today
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4">
        <div>
          <p className="text-xs text-muted-foreground">This week</p>
          <p className="mt-1 font-medium">{weekTotal ?? "—"}</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Daily avg</p>
          <p className="mt-1 font-medium">{dailyAvg ?? "—"}</p>
        </div>
      </div>

      <div className="mt-4 border-t border-border pt-4">
        <p className="text-xs text-muted-foreground">Top languages</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {languages.length === 0 && <span className="text-xs text-muted-foreground">—</span>}
          {languages.map((l) => (
            <span
              key={l.name}
              className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
            >
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
