"use client";

import { useState } from "react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/content";
import { TechBadge } from "@/components/tech-badge";
import { cardSurface, cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const bullets = project.bullets ?? [];
  const visible = expanded ? bullets : bullets.slice(0, 1);

  return (
    <div className={cn(cardSurface, "flex h-full flex-col p-6")}>
      <div className="flex items-start justify-between gap-2">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-lg font-semibold hover:text-accent hover:underline"
          >
            {project.title}
          </a>
        ) : (
          <h3 className="text-lg font-semibold">{project.title}</h3>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded-lg bg-border px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-border-strong hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        )}
      </div>

      {project.badge && (
        <p className="mt-1 text-xs font-medium text-accent">{project.badge}</p>
      )}
      {project.period && (
        <p className="text-xs text-muted-foreground">{project.period}</p>
      )}

      <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>

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

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechBadge key={t} label={t} />
        ))}
      </div>
    </div>
  );
}
