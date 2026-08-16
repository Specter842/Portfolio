import type { Metadata } from "next";
import type { ReactNode } from "react";
import { GithubIcon } from "@/components/icons";
import { socials } from "@/data/content";
import {
  tokenThroughput,
  tokenBreakdown,
  byAgent,
  topModels,
  totalModelsCount,
  githubStats,
  editorStats,
} from "@/data/coding-stats";

export const metadata: Metadata = {
  title: "Coding Stats | Anay Gupta",
};

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-muted-foreground">{children}</p>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export default function CodingStatsPage() {
  const max = Math.max(...tokenThroughput.chart);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Coding Stats</h1>

      {/* Token throughput */}
      <section className="mt-10 rounded-2xl border border-border bg-background p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <SectionLabel>TOKEN THROUGHPUT</SectionLabel>
          <span className="font-mono text-xs text-muted-foreground">{tokenThroughput.range}</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile value={tokenThroughput.tokensRouted} label="tokens routed" />
          <StatTile value={tokenThroughput.activeDays} label="active days" />
          <StatTile value={tokenThroughput.busiestDay} label="busiest day" />
          <StatTile value={tokenThroughput.costAtListRates} label="at list API rates" />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex gap-3">
            {tokenThroughput.agents.map((a) => (
              <span key={a} className="rounded-md bg-secondary px-2 py-1 text-secondary-foreground">
                {a}
              </span>
            ))}
          </div>
          <div className="ml-auto flex gap-3">
            <span className="text-foreground">Tokens</span>
            <span>Cost</span>
            <span className="mx-1">|</span>
            <span>7d</span>
            <span>30d</span>
            <span className="text-foreground">All</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-end gap-1" style={{ height: 120 }}>
            {tokenThroughput.chart.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-accent/70"
                style={{ height: `${(v / max) * 100}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>
              {tokenThroughput.peakLabel} · {tokenThroughput.peakValue}
            </span>
            <span>Aug 16</span>
          </div>
        </div>
      </section>

      {/* What the tokens are */}
      <section className="mt-8 rounded-2xl border border-border bg-background p-6">
        <div className="flex items-center justify-between">
          <SectionLabel>WHAT THE TOKENS ARE</SectionLabel>
          <span className="text-xs text-muted-foreground">all time</span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tokenBreakdown.map((t) => (
            <div key={t.label} className="rounded-xl border border-border bg-card p-4">
              <p className="text-sm font-medium">{t.label}</p>
              <p className="mt-1 text-xl font-bold">{t.pct}</p>
              <p className="text-sm text-muted-foreground">{t.value}</p>
              <p className="text-xs text-muted-foreground">{t.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* By agent + Top models */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-background p-6">
          <div className="flex items-center justify-between">
            <SectionLabel>BY AGENT</SectionLabel>
            <span className="text-xs text-muted-foreground">{byAgent.length} agents</span>
          </div>
          <div className="mt-4 space-y-3">
            {byAgent.map((a) => (
              <div key={a.name} className="flex items-center justify-between text-sm">
                <span className="font-medium">{a.name}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {a.value} · {a.pct} · {a.days}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-background p-6">
          <div className="flex items-center justify-between">
            <SectionLabel>TOP MODELS</SectionLabel>
            <span className="text-xs text-muted-foreground">{totalModelsCount} in total</span>
          </div>
          <div className="mt-4 space-y-3">
            {topModels.map((m) => (
              <div key={m.name} className="flex items-center justify-between text-sm">
                <span className="font-medium">{m.name}</span>
                <span className="font-mono text-xs text-muted-foreground">
                  {m.tokens} · {m.cost}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* GitHub */}
      <section className="mt-8 rounded-2xl border border-border bg-background p-6">
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
            <p className="text-xl font-bold">{editorStats.weekTotal}</p>
            <p className="text-xs text-muted-foreground">this week</p>
          </div>
          <div>
            <p className="text-xl font-bold">{editorStats.dailyAvg}</p>
            <p className="text-xs text-muted-foreground">daily average</p>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {editorStats.languages.map((l) => (
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
