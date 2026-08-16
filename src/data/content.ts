export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
  link: { label: string; href: string };
};

export const experiences: Experience[] = [
  {
    company: "MegaLLM",
    role: "Backend Engineer",
    period: "Nov 2025 - June 2026",
    bullets: [
      "Sole engineer on the MegaLLM backend — a production OpenAI/Anthropic-compatible API gateway in front of 70+ LLMs on Hono + Bun + TypeScript with MongoDB, Redis, Kafka, and ClickHouse.",
      "Designed a 3-tier cache (in-memory LRU → Redis → MongoDB) hitting >95% L0 hit rate at ~2–4ms, plus intelligent model routing with a MobileBERT classifier and 429/5xx fallback chains.",
      "Shipped Stripe + Razorpay + OxaPay billing with idempotent webhooks, organization wallets, and ClickHouse credit-event streaming for usage correlation.",
      "Hardened the platform with JWT + Redis blacklist, prefix-lookup API keys, 3-tier admin RBAC, and full Prometheus/OpenTelemetry/Grafana Loki observability.",
    ],
    tech: [
      "TypeScript",
      "Hono",
      "Bun",
      "MongoDB",
      "Redis",
      "Kafka",
      "ClickHouse",
      "Stripe",
      "Razorpay",
      "OxaPay",
      "Prometheus",
      "Docker",
    ],
    link: { label: "megallm.io", href: "https://megallm.io" },
  },
  {
    company: "Surf",
    role: "Co-Founder & Chief AI Engineer",
    period: "Dec 2025 - Jan 2026",
    bullets: [
      "Co-founded and engineered an AI-powered meeting platform with real-time transcription and multilingual translation",
      "Designed low-latency AI services using Python, FastAPI, and WebSockets for real-time audio streaming",
      "Improved transcription stability through streaming optimizations and async processing pipelines",
    ],
    tech: ["Python", "FastAPI", "WebSockets", "AI/ML"],
    link: { label: "staging.shonen.live", href: "https://staging.shonen.live" },
  },
];

export type Project = {
  title: string;
  badge?: string;
  period?: string;
  description: string;
  bullets?: string[];
  tech: string[];
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Aegis: LLM Security Gateway",
    badge: "Personal Project",
    description:
      "Production-grade LLM security firewall with bidirectional enforcement, adversarial input scanning, and a real-time operator console.",
    bullets: [
      "Built a bidirectional security gateway that scans LLM prompts and responses in real time, combining regex, YARA rules, and ML models in a multi-stage detection pipeline.",
      "Implemented canary-token leak detection and a YAML-driven policy engine (allow/sanitize/challenge/block) with a real-time WebSocket incident console.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "Kafka", "Docker", "YARA"],
    github: "https://github.com/Specter842/Aegis",
    featured: true,
  },
  {
    title: "UniHealth: Healthcare Interoperability Platform",
    badge: "Personal Project",
    description:
      "Cloud-based healthcare interoperability platform enabling secure real-time hospital data exchange via APIs.",
    bullets: [
      "Built a cloud-based healthcare interoperability platform enabling secure real-time hospital data exchange using APIs.",
      "Implemented role-based access control and a scalable patient identity system for secure inter-hospital coordination.",
    ],
    tech: ["TypeScript", "React", "REST APIs", "RBAC"],
    github: "https://github.com/Specter842/UniHealth",
    featured: true,
  },
  {
    title: "AuthenTick: Blockchain Anti-Counterfeit Platform",
    badge: "Personal Project",
    description:
      "Hybrid blockchain platform where manufacturers mint product NFTs, distributors track shipments, and consumers verify authenticity via secure QR codes.",
    tech: ["TypeScript", "Solidity", "Next.js"],
    github: "https://github.com/Specter842/AuthenTick",
    featured: true,
  },
  {
    title: "ChainGuard: Ethereum Fraud Detection",
    badge: "Personal Project",
    description:
      "Ethereum fraud detection using a Random Forest classifier on 10,000+ transactions, integrated with a Solidity smart contract for immutable on-chain audit logging.",
    tech: ["Python", "Jupyter Notebook", "Solidity", "JavaScript"],
    github: "https://github.com/Specter842/ChainGuard",
  },
  {
    title: "Glasses: Personal Productivity OS",
    badge: "Personal Project",
    description:
      "A personal productivity operating system for task management, planning, and life organization.",
    tech: ["JavaScript", "TypeScript"],
    github: "https://github.com/Specter842/Glasses",
  },
  {
    title: "Notes & Reminders",
    badge: "Open Source",
    description:
      "An open-source, lightweight note-taking solution — the pain-less way to create meaningful notes, your notes your way.",
    tech: ["Go", "TypeScript"],
    github: "https://github.com/Specter842/Notes-and-Reminders",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "LANGUAGES", items: ["Python", "TypeScript", "JavaScript", "C", "SQL"] },
  { label: "DATABASES", items: ["MongoDB", "PostgreSQL", "Redis", "ClickHouse", "SQLite"] },
  {
    label: "BACKEND",
    items: ["FastAPI", "Hono", "Django", "Flask", "Node.js", "Express", "REST APIs", "WebSockets", "SQLAlchemy"],
  },
  {
    label: "FRONTEND",
    items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "Zustand", "Leaflet"],
  },
  { label: "CLOUD & DEVOPS", items: ["AWS", "Azure", "GCP", "Vercel", "Docker", "Kafka"] },
  { label: "OBSERVABILITY", items: ["Prometheus", "OpenTelemetry", "Grafana Loki", "Sentry"] },
  {
    label: "CORE CS",
    items: ["Data Structures & Algorithms", "Problem Solving", "Competitive Programming"],
  },
  {
    label: "TOOLS",
    items: ["Git", "GitHub", "Linux/Unix", "Bun", "Postman", "Stripe", "Razorpay", "OxaPay", "Twilio", "PIL/Pillow"],
  },
];

export const education = [
  {
    degree: "B.E. in Computer Science",
    period: "2025 - 2029 (Expected)",
    school: "Thapar Institute of Engineering & Technology",
    location: "Patiala, India",
  },
  {
    degree: "Higher Secondary School (77.2%)",
    period: "2023 - 2025",
    school: "SSD Krishna Vatika School",
    location: "Bathinda, India",
  },
  {
    degree: "Secondary School (81.8%)",
    period: "2020 - 2023",
    school: "Bishop Cotton School",
    location: "Shimla, India",
  },
];

export const socials = {
  github: "https://github.com/Specter842",
  linkedin: "https://linkedin.com/in/ishaanjainofficial",
  hackerrank: "https://hackerrank.com/ishaanjain842",
  behance: "https://behance.net/specter842",
  email: "specterofficial842@gmail.com",
  resumeEmail: "specterofficial842@gmail.com",
  phone: "+91 95998 83298",
};

export const codingLanguages = [
  { name: "TypeScript", time: "36 hrs 54 mins", weeklyTime: "36 hrs 54 mins" },
  { name: "CSS", time: "4 hrs 56 mins" },
  { name: "Python", time: "4 hrs 31 mins" },
  { name: "Markdown", time: "3 hrs 45 mins" },
  { name: "JavaScript", time: "2 hrs 27 mins" },
];
