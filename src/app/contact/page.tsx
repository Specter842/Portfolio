import type { Metadata } from "next";
import { Mail, Phone, MapPin, Code2 } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import { ContactForm } from "@/components/contact-form";
import { socials } from "@/data/content";
import { cardSurface, cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact | Specter842",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        I&apos;m always interested in hearing about new projects and opportunities
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-5">
        <div className={cn(cardSurface, "p-6 hover:translate-y-0 md:col-span-3")}>
          <h2 className="text-lg font-semibold">Send me a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill out the form below and I&apos;ll get back to you as soon as possible.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-4 md:col-span-2">
          <div className={cn(cardSurface, "p-5")}>
            <div className="flex items-center gap-3">
              <Mail className="size-5 text-accent" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{socials.email}</p>
              </div>
            </div>
            <a
              href={`mailto:${socials.email}`}
              className="mt-3 inline-block text-xs font-medium text-accent hover:underline"
            >
              Send email
            </a>
          </div>

          <div className={cn(cardSurface, "p-5")}>
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-accent" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">{socials.phone}</p>
              </div>
            </div>
            <a
              href={`tel:${socials.phone.replace(/\s/g, "")}`}
              className="mt-3 inline-block text-xs font-medium text-accent hover:underline"
            >
              Call me
            </a>
          </div>

          <div className={cn(cardSurface, "p-5")}>
            <div className="flex items-center gap-3">
              <MapPin className="size-5 text-accent" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">Asia/Kolkata</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Available worldwide</p>
          </div>

          <div className={cn(cardSurface, "p-5")}>
            <p className="text-sm font-medium">Follow me</p>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <LinkedInIcon className="size-4" /> LinkedIn
              </a>
              <a
                href={socials.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <Code2 className="size-4" /> HackerRank
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
