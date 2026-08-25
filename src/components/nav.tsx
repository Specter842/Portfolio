"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import { SunIcon, MoonIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
  { href: "/coding-stats", label: "Stats" },
];

function toggleThemeWithTransition(
  e: MouseEvent<HTMLButtonElement>,
  next: "light" | "dark",
  setTheme: (theme: string) => void
) {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100;
  const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100;
  document.documentElement.style.setProperty("--theme-toggle-x", `${x}%`);
  document.documentElement.style.setProperty("--theme-toggle-y", `${y}%`);

  if (!document.startViewTransition) {
    setTheme(next);
    return;
  }
  document.documentElement.classList.add("theme-transitioning");
  const stopTransitioning = () =>
    document.documentElement.classList.remove("theme-transitioning");
  try {
    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
    // A transition can be aborted (e.g. dev-server HMR interference) without
    // the theme change itself failing -- flushSync already applied it above,
    // so just swallow the animation-only rejection instead of letting it
    // surface as an unhandled promise rejection.
    transition.ready.catch(() => {});
    transition.finished.catch(() => {}).finally(stopTransitioning);
  } catch {
    setTheme(next);
    stopTransitioning();
  }
}

export function Nav() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect -- mount flag avoids SSR/client theme hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          specter842
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                pathname === l.href && "text-foreground font-medium"
              )}
            >
              {l.label}
            </Link>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={(e) =>
              toggleThemeWithTransition(e, resolvedTheme === "dark" ? "light" : "dark", setTheme)
            }
            className="rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            {mounted && resolvedTheme === "dark" ? (
              <SunIcon className="size-4" />
            ) : (
              <MoonIcon className="size-4" />
            )}
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-border p-2 text-muted-foreground md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border/60 px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-foreground",
                pathname === l.href && "text-foreground font-medium"
              )}
            >
              {l.label}
            </Link>
          ))}
          <button
            aria-label="Toggle theme"
            onClick={(e) =>
              toggleThemeWithTransition(e, resolvedTheme === "dark" ? "light" : "dark", setTheme)
            }
            className="mt-2 flex w-fit items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground"
          >
            {mounted && resolvedTheme === "dark" ? (
              <SunIcon className="size-4" />
            ) : (
              <MoonIcon className="size-4" />
            )}
            Toggle theme
          </button>
        </div>
      )}
    </header>
  );
}
