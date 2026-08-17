"use client";

import { useState } from "react";
import type { Competition } from "@/data/content";
import { TechBadge } from "@/components/tech-badge";
import { cardSurface, cn } from "@/lib/utils";

export function CompetitionCard({ competition }: { competition: Competition }) {
  const [expanded, setExpanded] = useState(false);
  const bullets = competition.bullets ?? [];
  const visible = expanded ? bullets : bullets.slice(0, 1);

  return (
    <div className={cn(cardSurface, "flex h-full flex-col p-6")}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold">{competition.name}</h3>
        {competition.result && (
          <span className="shrink-0 rounded-lg bg-border px-3 py-1.5 text-sm font-medium text-muted-foreground">
            {competition.result}
          </span>
        )}
      </div>

      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="font-medium text-accent">{competition.category}</span>
        {competition.period && <span>· {competition.period}</span>}
      </div>

      <p className="mt-3 text-sm text-muted-foreground">{competition.description}</p>

      {bullets.length > 0 && (
        <>
          <ul className="mt-3 space-y-2">
            {visible.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {bullets.length > 1 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-2 w-fit text-xs font-medium text-accent hover:underline"
            >
              {expanded ? "Show less" : "Show more"}
            </button>
          )}
        </>
      )}

      {competition.tech && competition.tech.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {competition.tech.map((t) => (
            <TechBadge key={t} label={t} />
          ))}
        </div>
      )}

      {competition.link && (
        <a
          href={competition.link.href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block w-fit text-sm font-medium text-accent hover:underline"
        >
          {competition.link.label}
        </a>
      )}
    </div>
  );
}
