import { GithubIcon, DiscordIcon, MailIcon } from "@/components/icons";
import { socials } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-8">
        <div className="flex items-center justify-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full bg-secondary/50 p-2.5 text-muted-foreground transition-colors hover:bg-border-strong hover:text-accent"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={socials.discordUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="rounded-full bg-secondary/50 p-2.5 text-muted-foreground transition-colors hover:bg-border-strong hover:text-accent"
          >
            <DiscordIcon className="size-4" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="rounded-full bg-secondary/50 p-2.5 text-muted-foreground transition-colors hover:bg-border-strong hover:text-accent"
          >
            <MailIcon className="size-4" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row sm:text-sm">
          <p>© 2026 specter842. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Fueled by</span>
            <span aria-hidden>☕</span>
            <span>•</span>
            <span>
              Crafted in <span className="font-semibold text-accent">Next.js</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
