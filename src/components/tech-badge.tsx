"use client";

import { useState } from "react";

export function TechBadge({ label }: { label: string }) {
  const [show, setShow] = useState(false);

  return (
    <button
      type="button"
      aria-label={`Show ${label} tooltip`}
      onClick={() => setShow((v) => !v)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="tag-inner-shadow relative rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
    >
      {label}
      {show && (
        <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-normal text-background shadow-md">
          {label}
        </span>
      )}
    </button>
  );
}
