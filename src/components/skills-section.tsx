import { skillGroups } from "@/data/content";
import { cardSurface, cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Skills</h2>
      <p className="mt-2 text-muted-foreground">Technologies and tools I work with</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.label} className={cn(cardSurface, "p-5")}>
            <p className="text-xs font-semibold tracking-wider text-muted-foreground">
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
