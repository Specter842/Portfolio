const GITHUB_COLOR = "var(--accent-color)";
const LEETCODE_COLOR = "oklch(75% 0.15 55)"; // orange, distinct from the site's accent

function intensity(count: number) {
  if (count <= 0) return 0;
  if (count >= 8) return 4;
  if (count >= 4) return 3;
  if (count >= 2) return 2;
  return 1;
}

const OPACITY_STEPS = [0, 0.35, 0.55, 0.75, 1];

function cellBackground(githubCount: number, leetcodeCount: number) {
  const gh = intensity(githubCount);
  const lc = intensity(leetcodeCount);

  if (gh === 0 && lc === 0) return "var(--secondary)";

  const ghColor = `color-mix(in oklch, ${GITHUB_COLOR} ${OPACITY_STEPS[gh] * 100}%, var(--secondary))`;
  const lcColor = `color-mix(in oklch, ${LEETCODE_COLOR} ${OPACITY_STEPS[lc] * 100}%, var(--secondary))`;

  if (gh > 0 && lc > 0) {
    return `linear-gradient(135deg, ${ghColor} 50%, ${lcColor} 50%)`;
  }
  return gh > 0 ? ghColor : lcColor;
}

export function ContributionHeatmap({
  githubCalendar,
  leetcodeCalendar,
}: {
  githubCalendar: { date: string; count: number }[];
  leetcodeCalendar: Record<string, number>;
}) {
  if (githubCalendar.length === 0) return null;

  // githubCalendar arrives flat and already in Sunday-first weekly order from
  // the GitHub API's contributionCalendar -- chunk it back into weeks of 7.
  const weeks: { date: string; count: number }[][] = [];
  for (let i = 0; i < githubCalendar.length; i += 7) {
    weeks.push(githubCalendar.slice(i, i + 7));
  }

  return (
    <div>
      <div className="flex gap-[3px] overflow-x-auto pb-1">
        {weeks.map((week, i) => (
          <div key={i} className="flex flex-col gap-[3px]">
            {week.map((day) => {
              const leetcodeCount = leetcodeCalendar[day.date] ?? 0;
              return (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count} GitHub contribution${day.count === 1 ? "" : "s"}, ${leetcodeCount} LeetCode submission${leetcodeCount === 1 ? "" : "s"}`}
                  className="size-[11px] rounded-[2px]"
                  style={{ background: cellBackground(day.count, leetcodeCount) }}
                />
              );
            })}
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-[2px]" style={{ background: GITHUB_COLOR }} />
          GitHub
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-[2px]" style={{ background: LEETCODE_COLOR }} />
          LeetCode
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="size-2.5 rounded-[2px]"
            style={{ background: `linear-gradient(135deg, ${GITHUB_COLOR} 50%, ${LEETCODE_COLOR} 50%)` }}
          />
          Both
        </div>
      </div>
    </div>
  );
}
