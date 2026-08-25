"use client";

import { useEffect } from "react";

// next-view-transitions occasionally has its internal document.startViewTransition()
// call aborted (a benign race, not a functional bug -- navigation itself still
// completes). It catches that internally and logs it via console.error itself,
// so it's never a genuinely unhandled rejection -- a window "unhandledrejection"
// listener never sees it. Patch console.error to drop just this one message.
function isBenignTransitionAbort(args: unknown[]): boolean {
  return args.some((arg) => {
    const value = arg as { name?: string; message?: string } | undefined;
    return (
      value?.name === "InvalidStateError" &&
      /transition was aborted/i.test(value.message ?? "")
    );
  });
}

export function SuppressViewTransitionErrors() {
  useEffect(() => {
    const original = console.error;
    console.error = (...args: unknown[]) => {
      if (isBenignTransitionAbort(args)) return;
      original(...args);
    };
    return () => {
      console.error = original;
    };
  }, []);

  return null;
}
