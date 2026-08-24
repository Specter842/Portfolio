"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(scrollTop / max, 1) : 0);
      setVisible(scrollTop > 300);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:bg-border"
    >
      <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="24" r={RADIUS} fill="none" strokeWidth="2" className="stroke-border" />
        <circle
          cx="24"
          cy="24"
          r={RADIUS}
          fill="none"
          stroke="var(--accent-color)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
          style={{ transition: "stroke-dashoffset 100ms linear" }}
        />
      </svg>
      <ArrowUp className="relative size-4" />
    </button>
  );
}
