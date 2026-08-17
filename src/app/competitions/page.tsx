import type { Metadata } from "next";
import { competitions } from "@/data/content";
import { CompetitionCard } from "@/components/competition-card";

export const metadata: Metadata = {
  title: "Competitions | Specter842",
};

export default function CompetitionsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Competitions</h1>
      <p className="mt-2 text-muted-foreground">
        Hackathons, case competitions, and finance competitions
      </p>

      {competitions.length > 0 ? (
        <div className="mt-10 grid gap-6">
          {competitions.map((c) => (
            <CompetitionCard key={c.name} competition={c} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-muted-foreground">Nothing entered yet.</p>
      )}
    </main>
  );
}
