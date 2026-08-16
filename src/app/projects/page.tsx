import type { Metadata } from "next";
import { projects } from "@/data/content";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects | Ishaan Jain",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
      <p className="mt-2 text-muted-foreground">Things I&apos;ve built</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </main>
  );
}
