export const tokenThroughput = {
  range: "2026-01-14 → 2026-08-16",
  tokensRouted: "11.12B",
  activeDays: "45",
  busiestDay: "1.26B",
  costAtListRates: "≈$9.7k",
  agents: ["claude", "codex", "opencode"],
  peakLabel: "Jul 18",
  peakValue: "peak 1.26B",
  chart: [18, 24, 15, 32, 40, 28, 36, 55, 70, 62, 48, 100, 66, 40, 30, 45, 58, 33],
};

export const tokenBreakdown = [
  { label: "Cache reads", pct: "95.4%", value: "10.61B", sub: "context replayed" },
  { label: "Input", pct: "3.0%", value: "329.7M", sub: "prompts sent" },
  { label: "Cache writes", pct: "1.3%", value: "146.1M", sub: "context stored" },
  { label: "Output", pct: "0.3%", value: "30.9M", sub: "tokens generated" },
];

export const byAgent = [
  { name: "claude", value: "5.61B", pct: "50%", days: "17d" },
  { name: "codex", value: "4.54B", pct: "41%", days: "23d" },
  { name: "opencode", value: "965.8M", pct: "9%", days: "25d" },
];

export const totalModelsCount = 25;

export const topModels = [
  { name: "claude-opus-5", tokens: "5.61B", cost: "$4.0k" },
  { name: "gpt-5.6-sol", tokens: "4.46B", cost: "$5.3k" },
  { name: "gpt-5.6-luna", tokens: "602.7M", cost: "$20" },
  { name: "grok-4.5", tokens: "190.2M", cost: "$198" },
  { name: "gpt-5.6-sol-1", tokens: "126.5M", cost: "$147" },
  { name: "FW-Kimi-K3", tokens: "61.3M", cost: "$33" },
  { name: "gpt-5.6-terra", tokens: "30.8M", cost: "$16" },
  { name: "grok-4.3", tokens: "13.6M", cost: "$6" },
];


export const editorStats = {
  weekTotal: "60 hrs 4 mins",
  dailyAvg: "8 hrs 21 mins",
  languages: [
    { name: "TypeScript", time: "36 hrs 54 mins", pct: 61 },
    { name: "Python", time: "4 hrs 56 mins", pct: 8 },
    { name: "JavaScript", time: "4 hrs 31 mins", pct: 7 },
    { name: "Go", time: "3 hrs 45 mins", pct: 6 },
    { name: "Solidity", time: "2 hrs 27 mins", pct: 4 },
  ],
};
