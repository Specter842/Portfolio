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
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Aegis: LLM Security Gateway",
    badge: "Personal Project",
    description:
      "A production-grade security firewall that sits in front of LLM applications, inspecting every prompt and response for adversarial inputs, prompt injection, and data leaks. Combines regex, YARA rules, and ML-based detection in a multi-stage pipeline, with a real-time operator console and a YAML-driven policy engine to allow, sanitize, challenge, or block traffic on the fly.",
    bullets: [
      "Built a bidirectional security gateway that scans LLM prompts and responses in real time, combining regex, YARA rules, and ML models in a multi-stage detection pipeline.",
      "Implemented canary-token leak detection and a YAML-driven policy engine (allow/sanitize/challenge/block) with a real-time WebSocket incident console.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "React", "Kafka", "Docker", "YARA"],
    github: "https://github.com/Specter842/Aegis",
    liveUrl: "https://aegis-frontend-dn3z.onrender.com",
    featured: true,
  },
  {
    title: "UniHealth: Healthcare Interoperability Platform",
    badge: "Personal Project",
    description:
      "A cloud-based platform that lets hospitals exchange patient data securely and in real time through a unified API layer, cutting through the fragmentation of siloed hospital record systems. Built with role-based access control and a scalable patient identity system so multiple institutions can coordinate care without compromising privacy.",
    bullets: [
      "Built a cloud-based healthcare interoperability platform enabling secure real-time hospital data exchange using APIs.",
      "Implemented role-based access control and a scalable patient identity system for secure inter-hospital coordination.",
    ],
    tech: ["TypeScript", "React", "REST APIs", "RBAC"],
    github: "https://github.com/Specter842/UniHealth",
    liveUrl: "https://uni-health-kappa.vercel.app",
    featured: true,
  },
  {
    title: "AuthenTick: Blockchain Anti-Counterfeit Platform",
    badge: "Personal Project",
    description:
      "A hybrid blockchain platform for fighting counterfeit goods across the supply chain: manufacturers mint an NFT for each product, distributors log shipment checkpoints on-chain, and consumers scan a secure QR code to instantly verify a product's authenticity and full chain of custody.",
    tech: ["TypeScript", "Solidity", "Next.js"],
    github: "https://github.com/Specter842/AuthenTick",
    featured: true,
  },
  {
    title: "ChainGuard: Ethereum Fraud Detection",
    badge: "Personal Project",
    description:
      "An Ethereum fraud-detection system that trains a Random Forest classifier on 10,000+ real transactions to flag suspicious wallet activity, then writes flagged events to a Solidity smart contract for tamper-proof, on-chain audit logging that can't be quietly edited after the fact.",
    tech: ["Python", "Jupyter Notebook", "Solidity", "JavaScript"],
    github: "https://github.com/Specter842/ChainGuard",
  },
  {
    title: "Glasses: Personal Productivity OS",
    badge: "Personal Project",
    description:
      "A personal productivity operating system built to replace a scattered stack of to-do apps and notebooks with one place for task management, planning, and day-to-day life organization — designed around how I actually work rather than a generic template.",
    tech: ["JavaScript", "TypeScript"],
    github: "https://github.com/Specter842/Glasses",
  },
  {
    title: "Notes & Reminders",
    badge: "Open Source",
    description:
      "An open-source, lightweight note-taking app focused on getting out of your way: fast capture, minimal friction, and full control over how your notes are organized — built as a self-hostable alternative to heavier, bloated note-taking tools.",
    tech: ["Go", "TypeScript"],
    github: "https://github.com/Specter842/Notes-and-Reminders",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "LANGUAGES", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  {
    label: "DEVELOPMENT",
    items: ["Android Development", "Software Architecture", "AI/ML Systems", "TensorFlow", "Alpaca API", "Quantum ML", "Astropy"],
  },
  {
    label: "CYBERSECURITY",
    items: ["Secure Systems", "Network Security", "Threat Analysis", "Data Protection", "LLM Security", "TLS / mTLS"],
  },
  { label: "BLOCKCHAIN", items: ["Solidity", "Ethereum", "Smart Contracts", "Web3.py", "Hardhat", "ethers.js"] },
  { label: "TOOLS", items: ["Git", "GitHub", "Linux", "Android Studio", "VS Code", "Bash", "Terraform", "Jupyter", "Grafana"] },
  {
    label: "ENGINEERING",
    items: ["Robotics", "Embedded Systems", "Control Systems", "Prototyping", "MQTT", "ESP32", "FPGA", "Isaac Sim"],
  },
];

export const socials = {
  github: "https://github.com/Specter842",
  behance: "https://behance.net/specter842",
  discord: "@specter842",
  discordUrl: "https://discord.com/users/985132611045322753",
  email: "specterofficial842@gmail.com",
  resumeEmail: "specterofficial842@gmail.com",
};

export const certifications = [
  { name: "SQL (Basic)", issuer: "HackerRank" },
  { name: "SQL (Intermediate)", issuer: "HackerRank" },
  { name: "Python (Basic)", issuer: "HackerRank" },
  { name: "JavaScript (Basic)", issuer: "HackerRank" },
];
