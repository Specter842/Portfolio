import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BadgeCheck } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { socials, certifications } from "@/data/content";
import { getGithubStats } from "@/lib/github";
import { getWakaTimeWeekSummary } from "@/lib/wakatime";
import { PieChart } from "@/components/pie-chart";
import { ContributionHeatmap } from "@/components/contribution-heatmap";

export const metadata: Metadata = {
  title: "Coding Stats | Specter842",
};

// Live stats -- render fresh on every request instead of a static snapshot.
export const dynamic = "force-dynamic";

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
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Coding Stats</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
      {/* GitHub */}
      <section className="min-w-0 rounded-2xl border border-border bg-background p-6">
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
        {live && live.languages.length > 0 && (
          <div className="mt-5">
            <p className="mb-4 text-xs text-muted-foreground">Language distribution across public repos</p>
            <PieChart data={live.languages} />
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 sm:grid-cols-4">
          {githubStats.map((g) => (
            <div key={g.label} className="text-center">
              <p className="text-xl font-bold">{g.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{g.label}</p>
            </div>
          ))}
        </div>

        {live && live.calendar.length > 0 && (
          <div className="mt-6 border-t border-border pt-5">
            <ContributionHeatmap
              githubCalendar={live.calendar}
              leetcodeCalendar={{}}
              showLeetCode={false}
            />
          </div>
        )}
      </section>

      {/* Editor */}
      <section className="min-w-0 rounded-2xl border border-border bg-background p-6">
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
                <div className="chart-hover-group flex items-start justify-between gap-2">
                  {editor.dailyBreakdown.map((d) => (
                    <div key={d.date} className="flex w-8 flex-col items-center">
                      <div className="flex h-9 items-end justify-center">
                        <span className="text-center text-[10px] leading-tight text-muted-foreground">
                          {d.time}
                        </span>
                      </div>
                      <div className="flex h-[70px] w-full items-end">
                        <div
                          title={`${d.date}: ${d.time}`}
                          className="chart-hover-item w-full rounded-t bg-accent/70"
                          style={{ height: `${Math.max((d.seconds / max) * 70, 2)}px` }}
                        />
                      </div>
                      <span className="mt-1.5 text-[10px] text-muted-foreground">
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
      </div>

      <section className="mt-8 rounded-2xl border border-border bg-background p-6">
        <SectionLabel>CERTIFICATIONS</SectionLabel>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 rounded-lg border border-border p-3 transition-colors hover:border-accent"
            >
              <BadgeCheck className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <p className="text-sm font-medium">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
