import Link from "next/link";
import { socials } from "@/data/content";
import { cardSurface, cn } from "@/lib/utils";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className={cn(cardSurface, "px-8 py-14 text-center hover:translate-y-0")}>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Let&apos;s Work Together
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Have a project in mind or just want to chat? I&apos;m always open to discussing new
          opportunities and ideas.
        </p>
        <div className="mt-6 flex flex-col items-center gap-2">
          <Link
            href="/contact"
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-color-dark)]"
          >
            Get in Touch
          </Link>
          <a
            href={`mailto:${socials.email}`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            {socials.email}
          </a>
        </div>
      </div>
    </section>
  );
}
