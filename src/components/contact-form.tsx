"use client";

import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://forminit.com/f/cbuc497qrrz";

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border-strong bg-background px-3 py-2 text-sm outline-none focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submission failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name *
        </label>
        <input
          id="name"
          name="fi-sender-fullName"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email *
        </label>
        <input
          id="email"
          name="fi-sender-email"
          type="email"
          required
          placeholder="your.email@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="link" className="text-sm font-medium">
          Link (optional)
        </label>
        <input
          id="link"
          name="fi-url-link"
          placeholder="https://your-project.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message *
        </label>
        <textarea
          id="message"
          name="fi-text-message"
          required
          rows={3}
          placeholder="Tell me about your project or just say hello..."
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="attachment" className="text-sm font-medium">
          Attachment (optional)
        </label>
        <input
          id="attachment"
          name="fi-file-attachment"
          type="file"
          className="mt-1.5 block w-full text-sm text-muted-foreground file:mr-3 file:rounded-lg file:border file:border-border-strong file:bg-card file:px-3 file:py-1.5 file:text-sm file:font-medium"
        />
        <p className="mt-1 text-xs text-muted-foreground">
          Max 8MB. Supported: Images, PDF, TXT, DOC
        </p>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--accent-color-dark)] disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-accent">Thanks — your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">
          Something went wrong sending that — try again, or email me directly.
        </p>
      )}
    </form>
  );
}
