import Link from "next/link";
import { FileText } from "lucide-react";
import { GithubIcon, MailIcon } from "@/components/icons";
import { LiveClock } from "@/components/live-clock";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import { ContactCta } from "@/components/contact-cta";
import { projects, socials } from "@/data/content";
import { pillSurface, cn } from "@/lib/utils";

const featured = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <main>
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="relative text-5xl font-bold tracking-tight sm:text-6xl">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-1 left-1 text-transparent [-webkit-text-stroke:1px_var(--border)] select-none"
            >
              specter842
            </span>
            <span className="relative">specter842</span>
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Computational Systems Engineer building secure, intelligent systems across
            cybersecurity, blockchain, and robotics.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/resume"
              className={cn(pillSurface, "flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:text-foreground")}
            >
              <FileText className="size-4" />
              Resume
            </Link>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className={cn(pillSurface, "flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:text-foreground")}
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={`mailto:${socials.email}`}
              className={cn(pillSurface, "flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-secondary-foreground hover:text-foreground")}
            >
              <MailIcon className="size-4" />
              Email
            </a>
          </div>
        </div>

        <LiveClock />
      </section>

      <ExperienceSection />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Featured Projects</h2>
        <p className="mt-2 text-muted-foreground">Some things I&apos;ve created</p>

        <div className="mt-8 grid gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-8 inline-block text-sm font-medium text-accent hover:underline"
        >
          View all projects →
        </Link>
      </section>

      <SkillsSection />
      <ContactCta />
    </main>
  );
}
