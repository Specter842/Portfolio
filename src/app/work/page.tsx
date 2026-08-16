import type { Metadata } from "next";
import { experiences } from "@/data/content";
import { TechBadge } from "@/components/tech-badge";
import { cardSurface, cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Work | Anay Gupta",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h1>
      <p className="mt-2 text-muted-foreground">My professional journey and experience</p>

      <div className="mt-10 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.company} className={cn(cardSurface, "p-6")}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold">{exp.company}</h2>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <p className="text-sm text-accent">{exp.role}</p>

            <ul className="mt-4 space-y-2">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>

            <a
              href={exp.link.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-sm font-medium text-accent hover:underline"
            >
              {exp.link.label}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
