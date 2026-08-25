import { GithubIcon, DiscordIcon, MailIcon } from "@/components/icons";
import { socials } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/60">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-6 text-center text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={socials.discordUrl}
            target="_blank"
            rel="noreferrer"
            className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
          >
            <DiscordIcon className="size-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
          >
            <MailIcon className="size-5" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <p>© 2026 specter842. All rights reserved.</p>
          <p>
            Fueled by <span aria-hidden>☕</span>
            <span className="mx-2">•</span>
            Crafted in <span className="font-medium text-foreground">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
