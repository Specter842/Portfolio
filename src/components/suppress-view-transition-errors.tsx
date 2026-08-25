"use client";

import { useEffect } from "react";

function isBenignTransitionAbort(value: unknown): boolean {
  const v = value as { name?: string; message?: string } | undefined;
  return v?.name === "InvalidStateError" && /transition was aborted/i.test(v.message ?? "");
}

// next-view-transitions occasionally has its internal document.startViewTransition()
// call aborted (a benign race, not a functional bug -- navigation itself still
// completes). It surfaces as a genuinely unhandled promise rejection on route
// changes. Suppress just this one known-benign error via both mechanisms that
// can produce it, since which one applies isn't consistent.
export function SuppressViewTransitionErrors() {
  useEffect(() => {
    function onRejection(event: PromiseRejectionEvent) {
      if (isBenignTransitionAbort(event.reason)) {
        event.preventDefault();
      }
    }
    window.addEventListener("unhandledrejection", onRejection);

    const originalError = console.error;
    console.error = (...args: unknown[]) => {
      if (args.some(isBenignTransitionAbort)) return;
      originalError(...args);
    };

    return () => {
      window.removeEventListener("unhandledrejection", onRejection);
      console.error = originalError;
    };
  }, []);

  return null;
}
