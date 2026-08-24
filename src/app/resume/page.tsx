import type { Metadata } from "next";
import { GithubIcon } from "@/components/icons";
import { socials } from "@/data/content";
import {
  resumeProfile,
  resumeExperience,
  resumeSkillGroups,
  resumeProjects,
  resumeEducation,
  resumeHonors,
  resumeLeadership,
} from "@/data/resume";

export const metadata: Metadata = {
  title: "Resume | Specter842",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{resumeProfile.name}</h1>
          <p className="mt-1 text-accent">{resumeProfile.title}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <a href={`mailto:${socials.resumeEmail}`} className="hover:text-foreground">
              {socials.resumeEmail}
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-foreground"
            >
              <GithubIcon className="size-3.5" /> GitHub
            </a>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Experience</h2>
        <div className="mt-6 space-y-8">
          {resumeExperience.map((exp) => (
            <div key={exp.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{exp.company}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-sm text-accent">{exp.role}</p>
              {exp.location && (
                <p className="text-xs text-muted-foreground">{exp.location}</p>
              )}
              <ul className="mt-2 space-y-1.5">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Technical Skills</h2>
        <div className="mt-6 space-y-3">
          {resumeSkillGroups.map((g) => (
            <div key={g.label} className="grid gap-1 sm:grid-cols-[140px_1fr]">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground">
                {g.label}
              </p>
              <p className="text-sm">{g.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Projects</h2>
        <div className="mt-6 space-y-8">
          {resumeProjects.map((p) => (
            <div key={p.title}>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-sm text-muted-foreground">| {p.subtitle}</span>
              </div>
              <p className="text-xs text-muted-foreground">{p.tech}</p>
              <ul className="mt-2 space-y-1.5">
                {p.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Education</h2>
        <div className="mt-6 space-y-4">
          {resumeEducation.map((ed) => (
            <div key={ed.school}>
              <p className="font-medium">{ed.school}</p>
              <p className="text-sm text-muted-foreground">{ed.degree}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Honors and Awards</h2>
        <ul className="mt-6 space-y-1.5">
          {resumeHonors.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-accent">•</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Leadership and Extracurricular</h2>
        <div className="mt-6 space-y-3">
          {resumeLeadership.map((l) => (
            <div key={l.org}>
              <p className="font-medium">{l.org}</p>
              <p className="text-sm text-muted-foreground">{l.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
