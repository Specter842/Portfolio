const COLORS = [
  "var(--accent-color)",
  "var(--accent-color-light)",
  "var(--accent-color-dark)",
  "oklch(70% 0 0)",
  "oklch(50% 0 0)",
  "oklch(35% 0 0)",
];

export function PieChart({ data }: { data: { name: string; pct: number }[] }) {
  let cumulative = 0;
  const stops = data.map((d, i) => {
    const start = cumulative;
    cumulative += d.pct;
    return `${COLORS[i % COLORS.length]} ${start}% ${cumulative}%`;
  });

  return (
    <div className="flex flex-wrap items-center gap-6">
      <div
        className="size-32 shrink-0 rounded-full"
        style={{
          background: `conic-gradient(${stops.join(", ")})`,
          WebkitMask: "radial-gradient(circle, transparent 58%, black 59%)",
          mask: "radial-gradient(circle, transparent 58%, black 59%)",
        }}
      />
      <div className="flex flex-col gap-1.5">
        {data.map((d, i) => (
          <div key={d.name} className="flex items-center gap-2 text-sm">
            <span
              className="size-2.5 shrink-0 rounded-full"
              style={{ background: COLORS[i % COLORS.length] }}
            />
            <span className="font-medium">{d.name}</span>
            <span className="text-muted-foreground">{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
