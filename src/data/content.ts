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
    title: "Protego: AI-Powered Personal Safety Platform",
    badge: "Govt. Pre Sabka AI Hackathon — 1st Position",
    period: "Nov 2025 – Present",
    description:
      "Award-winning full-stack personal safety platform with real-time GPS tracking, AI distress detection, geofenced safe zones, covert duress-password flow, and a government dashboard for jurisdiction-based emergency response.",
    bullets: [
      "Won 1st Position at the Govt. Pre Sabka AI Hackathon",
      "Built the FastAPI + PostgreSQL backend with JWT (httpOnly cookies), bcrypt, SQLAlchemy ORM, SlowAPI rate limiting, and Sentry error tracking",
      "Implemented a 5-second cancellable SOS countdown with parallel dispatch to SMS, WhatsApp, email, and voice via Twilio, plus token-based public live-tracking pages",
      "Integrated multi-provider AI — Whisper/Deepgram for transcription, Claude (via MegaLLM) for distress analysis, Azure OpenAI Realtime for the AI Safety Call feature, and ElevenLabs for TTS",
      "Shipped geofencing with Haversine calculations to auto-start/stop walk sessions, plus a Next.js 15 PWA frontend with Leaflet maps and Zustand state",
    ],
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Twilio",
      "WebSockets",
    ],
    github: "https://github.com/Anay0305/Protego",
    featured: true,
  },
  {
    title: "EduGuide: One-Stop Career & Education Advisor",
    badge: "Smart India Hackathon",
    period: "Sept 2025 – Oct 2025",
    description:
      "Developing a full-stack platform using Node.js, Express, MongoDB, and Next.js to improve college enrollment through personalized recommendations.",
    bullets: [
      "Implemented secure authentication, role-based access control, and RESTful APIs for courses and recommendations",
      "Integrated interactive college maps and multilingual content delivery using translation APIs",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    featured: true,
  },
  {
    title: "Boost Bot API",
    badge: "Personal Project",
    period: "Apr 2025 – May 2025",
    description:
      "Developed a Django-based backend for license key management, live order tracking, and Discord autobuy integrations.",
    bullets: [
      "Implemented WebSocket-based real-time updates and secure token-based authentication",
    ],
    tech: ["Python", "Django", "Django Channels", "WebSockets", "REST API"],
  },
  {
    title: "Online Mock Tests WebApp",
    badge: "Personal Project",
    period: "Feb 2025 – Mar 2025",
    description:
      "Developed a Django-based platform for conducting quizzes and mock exams with secure login and result tracking.",
    bullets: [
      "Implemented instant scoring, answer review, and an admin panel for managing tests, questions, and users",
    ],
    tech: ["Python", "Django", "JavaScript", "SQLite"],
  },
  {
    title: "Gateway Discord Bot",
    badge: "Public Project",
    period: "Nov 2022 – Jul 2024",
    description: "Comprehensive Discord bot with music playback and advanced moderation",
    bullets: [
      "Built REST APIs and a Flask-based Card Graphics API for dynamic profile cards and leaderboards",
      "Scaled the system to 635 guilds and 1.3M+ users while maintaining reliable backend performance",
    ],
    tech: ["Python", "discord.py", "Flask", "REST API", "PIL/Pillow"],
  },
  {
    title: "Card Graphics API for Gateway",
    badge: "Public Project",
    period: "Nov 2022 – Jul 2024",
    description: "Flask-based microservice for dynamic Discord visuals",
    tech: ["Python", "Flask", "PIL/Pillow"],
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
  github: "https://github.com/Anay0305",
  linkedin: "https://linkedin.com/in/anay-gupta-77b8831a1/",
  leetcode: "https://leetcode.com/Anay0305",
  email: "anaysumeet@gmail.com",
  resumeEmail: "me@anays.dev",
  phone: "+91 90566 90327",
};

export const codingLanguages = [
  { name: "TypeScript", time: "36 hrs 54 mins", weeklyTime: "36 hrs 54 mins" },
  { name: "CSS", time: "4 hrs 56 mins" },
  { name: "Python", time: "4 hrs 31 mins" },
  { name: "Markdown", time: "3 hrs 45 mins" },
  { name: "JavaScript", time: "2 hrs 27 mins" },
];
