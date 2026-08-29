import { Link } from "next-view-transitions";
import { FileText } from "lucide-react";
import { GithubIcon, MailIcon, DiscordIcon } from "@/components/icons";
import { LiveClock } from "@/components/live-clock";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import { ContactCta } from "@/components/contact-cta";
import { projects, socials } from "@/data/content";
import { pillSurface, cn } from "@/lib/utils";
import { getWakaTimeWeekSummary } from "@/lib/wakatime";

// This page fetches live stats -- force it to render fresh on every request
// instead of being statically cached, so navigating here doesn't require a
// hard refresh to see updated numbers.
export const dynamic = "force-dynamic";

const featured = projects.filter((p) => p.featured);

export default async function Home() {
  const stats = await getWakaTimeWeekSummary();

  return (
    <main>
      <section className="mx-auto grid max-w-5xl gap-10 px-6 py-10 md:grid-cols-2 md:items-center md:py-24">
        <div className="min-w-0">
          <h1 className="relative text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-1 left-1 text-transparent [-webkit-text-stroke:1px_var(--border)] select-none"
            >
              specter842
            </span>
            <span className="relative">specter842</span>
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Computational Systems Engineer — AI/ML, robotics, cybersecurity, finance, blockchain,
            IoT, and autonomous systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/resume"
              className={cn(pillSurface, "flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-secondary-foreground hover:text-foreground")}
            >
              <FileText className="size-4" />
              Resume
            </Link>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className={cn(pillSurface, "flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-secondary-foreground hover:text-foreground")}
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={`mailto:${socials.email}`}
              className={cn(pillSurface, "flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-secondary-foreground hover:text-foreground")}
            >
              <MailIcon className="size-4" />
              Email
            </a>
            <a
              href={socials.discordUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(pillSurface, "flex items-center gap-2 px-3.5 py-2.5 text-sm font-medium text-secondary-foreground hover:text-foreground")}
            >
              <DiscordIcon className="size-4" />
              Discord
            </a>
          </div>
        </div>

        <LiveClock
          codedToday={stats?.codedToday ?? null}
          weekTotal={stats?.weekTotal ?? null}
          dailyAvg={stats?.dailyAvg ?? null}
          languages={stats?.languages ?? []}
        />
      </section>

      <ExperienceSection />

      <section className="mx-auto max-w-5xl px-6 py-10 sm:py-16">
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
