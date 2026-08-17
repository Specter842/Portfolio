export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
  link?: { label: string; href: string };
};

export const experiences: Experience[] = [
  {
    company: "Haryana Cyber Police",
    role: "Cyber Ambassador — Gurugram Police Cyber Security Summer Internship (GPCSSI)",
    period: "05/2024 - 08/2024",
    bullets: [
      "Promoted cyber security awareness by coordinating outreach between Gurugram Police and the public.",
      "Assisted in organising workshops and contributed to community outreach to promote cyber safety.",
    ],
    tech: ["Cyber Security", "Community Outreach", "Public Safety"],
  },
  {
    company: "buildspace",
    role: "Nights and Weekends Programme",
    period: "05/2024 - 08/2024",
    bullets: [
      "Developed an acoustic fire suppression project exploring sound-based fire control, collaborating with a global builder community to iterate on the concept.",
    ],
    tech: ["Hardware Prototyping", "Acoustics", "Product Iteration"],
    link: { label: "buildspace.so", href: "https://buildspace.so" },
  },
  {
    company: "Adobe Inc.",
    role: "Project Intern",
    period: "08/2023 - 11/2023",
    bullets: [
      "Completed project-based training using Adobe Express and industry-standard creative workflows.",
      "Collaborated on team projects, strengthening communication and adaptability in professional environments.",
    ],
    tech: ["Adobe Express", "Creative Workflows", "Collaboration"],
    link: { label: "adobe.com", href: "https://www.adobe.com" },
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
  { label: "LANGUAGES", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  {
    label: "DEVELOPMENT",
    items: ["Android Development", "Software Architecture", "AI/ML Systems"],
  },
  {
    label: "CYBERSECURITY",
    items: ["Secure Systems", "Network Security", "Threat Analysis", "Data Protection", "LLM Security"],
  },
  { label: "BLOCKCHAIN", items: ["Solidity", "Ethereum", "Smart Contracts", "Web3.py"] },
  { label: "TOOLS", items: ["Git", "GitHub", "Linux", "Android Studio", "VS Code"] },
  {
    label: "ENGINEERING",
    items: ["Robotics", "Embedded Systems", "Control Systems", "Prototyping"],
  },
];

export const socials = {
  github: "https://github.com/Specter842",
  linkedin: "https://linkedin.com/in/ishaanjain842",
  hackerrank: "https://hackerrank.com/ishaanjain842",
  behance: "https://behance.net/specter842",
  email: "specterofficial842@gmail.com",
  resumeEmail: "specterofficial842@gmail.com",
  phone: "+91 95998 83298",
};

export const codingLanguages = [
  { name: "TypeScript", time: "36 hrs 54 mins", weeklyTime: "36 hrs 54 mins" },
  { name: "Python", time: "4 hrs 56 mins" },
  { name: "JavaScript", time: "4 hrs 31 mins" },
  { name: "Go", time: "3 hrs 45 mins" },
  { name: "Solidity", time: "2 hrs 27 mins" },
];
