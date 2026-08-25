"use client";

import { useEffect } from "react";

// next-view-transitions occasionally has its internal document.startViewTransition()
// call aborted (a benign race, not a functional bug -- navigation itself still
// completes). Without this it surfaces as an unhandled promise rejection on
// every route change. Only swallow that exact rejection; let anything else through.
export function SuppressViewTransitionErrors() {
  useEffect(() => {
    function onRejection(event: PromiseRejectionEvent) {
      const reason = event.reason as { name?: string; message?: string } | undefined;
      if (
        reason?.name === "InvalidStateError" &&
        /transition was aborted/i.test(reason.message ?? "")
      ) {
        event.preventDefault();
      }
    }
    window.addEventListener("unhandledrejection", onRejection);
    return () => window.removeEventListener("unhandledrejection", onRejection);
  }, []);

  return null;
}
