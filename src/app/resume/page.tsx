import type { Metadata } from "next";
import { Code2 } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import {
  experiences,
  projects,
  skillGroups,
  education,
  socials,
} from "@/data/content";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume | Anay Gupta",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Anay Gupta</h1>
          <p className="mt-1 text-accent">Software Engineer</p>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Software Engineer with experience in Python, TypeScript, and C, focused on backend
            development, RESTful APIs, and system automation. Hands-on experience with cloud
            platforms (AWS, Azure, GCP) and backend frameworks including Django and FastAPI.
            Passionate about open source, hackathons, and building scalable, production-ready
            systems.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>{socials.phone}</span>
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
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-foreground"
            >
              <LinkedInIcon className="size-3.5" /> LinkedIn
            </a>
            <a
              href={socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-foreground"
            >
              <Code2 className="size-3.5" /> LeetCode
            </a>
          </div>
        </div>
        <PrintButton />
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Work Experience</h2>
        <div className="mt-6 space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{exp.company}</h3>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
              <p className="text-sm text-accent">{exp.role}</p>
              <ul className="mt-2 space-y-1.5">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-accent">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-xs text-muted-foreground">{exp.tech.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Projects</h2>
        <div className="mt-6 space-y-8">
          {projects.map((p) => (
            <div key={p.title}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>
              {p.badge && <p className="text-sm text-accent">{p.badge}</p>}
              <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              {p.bullets && (
                <ul className="mt-2 space-y-1.5">
                  {p.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-accent">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-2 text-xs text-muted-foreground">{p.tech.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Education</h2>
        <div className="mt-6 space-y-4">
          {education.map((ed) => (
            <div key={ed.degree} className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="font-medium">{ed.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {ed.school} — {ed.location}
                </p>
              </div>
              <span className="text-sm text-muted-foreground">{ed.period}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">Technical Skills</h2>
        <div className="mt-6 space-y-4">
          {skillGroups.map((g) => (
            <div key={g.label} className="grid gap-1 sm:grid-cols-[160px_1fr]">
              <p className="text-xs font-semibold tracking-wider text-muted-foreground">
                {g.label}
              </p>
              <p className="text-sm">{g.items.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold tracking-tight">
          Problem Solving &amp; Competitive Programming
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Regular practice on LeetCode and hackathons, focusing on problem-solving with Data
          Structures &amp; Algorithms.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Proficient in arrays, strings, hash tables, linked lists, stacks, trees, tries, sorting,
          dynamic programming, divide &amp; conquer, and bit manipulation. Strong foundation in
          applying algorithmic techniques to solve real-world problems efficiently.
        </p>
      </section>
    </main>
  );
}
