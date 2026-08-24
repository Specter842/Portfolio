import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GithubIcon } from "@/components/icons";
import { socials } from "@/data/content";
import { getGithubStats } from "@/lib/github";
import { getWakaTimeWeekSummary } from "@/lib/wakatime";

export const metadata: Metadata = {
  title: "Coding Stats | Specter842",
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-muted-foreground">{children}</p>
  );
}

export default async function CodingStatsPage() {
  const live = await getGithubStats();
  const editor = await getWakaTimeWeekSummary();
  const githubStats = [
    { label: "days current streak", value: live ? String(live.currentStreak) : "—" },
    { label: "days longest streak", value: live ? String(live.longestStreak) : "—" },
    { label: "contributions", value: live ? live.contributions.toLocaleString() : "—" },
    { label: "active days", value: live ? String(live.activeDays) : "—" },
    { label: "busiest day", value: live ? String(live.busiestDay) : "—" },
    { label: "repositories", value: live ? String(live.repositories) : "—" },
    { label: "stars", value: live ? String(live.stars) : "—" },
    { label: "followers", value: live ? String(live.followers) : "—" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Coding Stats</h1>

      {/* GitHub */}
      <section className="mt-10 rounded-2xl border border-border bg-background p-6">
        <div className="flex items-center justify-between">
          <SectionLabel>ON GITHUB</SectionLabel>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
          >
            <GithubIcon className="size-3.5" /> @Specter842
          </a>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {githubStats.map((g) => (
            <div key={g.label} className="text-center">
              <p className="text-xl font-bold">{g.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{g.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editor */}
      <section className="mt-8 rounded-2xl border border-border bg-background p-6">
        <div className="flex items-center justify-between">
          <SectionLabel>IN THE EDITOR</SectionLabel>
          <span className="text-xs text-muted-foreground">last 7 days</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="text-xl font-bold">{editor?.weekTotal ?? "—"}</p>
            <p className="text-xs text-muted-foreground">this week</p>
          </div>
          <div>
            <p className="text-xl font-bold">{editor?.dailyAvg ?? "—"}</p>
            <p className="text-xs text-muted-foreground">daily average</p>
          </div>
        </div>

        {editor && editor.dailyBreakdown.length > 0 && (
          <div className="mt-6 border-t border-border pt-5">
            {(() => {
              const max = Math.max(...editor.dailyBreakdown.map((d) => d.seconds), 1);
              return (
                <div className="flex items-end gap-2" style={{ height: 100 }}>
                  {editor.dailyBreakdown.map((d) => (
                    <div key={d.date} className="flex flex-1 flex-col items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground">{d.time}</span>
                      <div
                        title={`${d.date}: ${d.time}`}
                        className="w-full rounded-t bg-accent/70"
                        style={{ height: `${Math.max((d.seconds / max) * 70, 2)}px` }}
                      />
                      <span className="text-[10px] text-muted-foreground">
                        {d.date
                          ? new Date(`${d.date}T00:00:00`).toLocaleDateString("en-US", {
                              weekday: "short",
                            })
                          : ""}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}

        <div className="mt-5 space-y-3">
          {(editor?.languages ?? []).map((l) => (
            <div key={l.name}>
              <div className="flex justify-between text-sm">
                <span className="font-medium">{l.name}</span>
                <span className="text-muted-foreground">{l.time}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-secondary">
                <div
                  className="h-1.5 rounded-full bg-accent"
                  style={{ width: `${l.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
