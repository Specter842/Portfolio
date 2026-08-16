export const resumeProfile = {
  name: "Ishaan Jain",
  title: "Student | Computational Systems Architect",
  location: "Gurugram, India",
};

export const resumeExperience = [
  {
    company: "Haryana Cyber Police",
    role: "Cyber Ambassador",
    program: "Gurugram Police Cyber Security Summer Internship (GPCSSI)",
    location: "Gurugram, Haryana, India",
    period: "05/2024 - 08/2024",
    bullets: [
      "Promoted cyber security awareness by coordinating outreach between Gurugram Police and the public.",
      "Assisted in organising workshops and contributed to community outreach to promote cyber safety.",
    ],
  },
  {
    company: "buildspace",
    role: "buildspace - Nights and Weekends Programme",
    location: "Remote",
    period: "05/2024 - 08/2024",
    bullets: [
      "Developed an acoustic fire suppression project exploring sound-based fire control, collaborating with a global builder community to iterate on the concept.",
    ],
  },
  {
    company: "Adobe Inc.",
    role: "Project Intern",
    location: "Greater Noida, UP, India",
    period: "08/2023 - 11/2023",
    bullets: [
      "Completed project-based training using Adobe Express and industry-standard creative workflows.",
      "Collaborated on team projects, strengthening communication and adaptability in professional environments.",
    ],
  },
];

export const resumeSkillGroups: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "Java", "C++", "JavaScript", "SQL"] },
  { label: "Development", items: ["Android Development", "Software Architecture", "AI/ML Systems"] },
  {
    label: "Cybersecurity",
    items: ["Secure Systems", "Network Security", "Threat Analysis", "Data Protection", "LLM Security"],
  },
  { label: "Blockchain", items: ["Solidity", "Ethereum", "Smart Contracts", "Web3.py"] },
  { label: "Tools", items: ["Git", "GitHub", "Linux", "Android Studio", "VS Code"] },
  { label: "Engineering", items: ["Robotics", "Embedded Systems", "Control Systems", "Prototyping"] },
];

export const resumeProjects = [
  {
    title: "Aegis",
    subtitle: "LLM Security Gateway",
    tech: "Python, FastAPI, PostgreSQL, React",
    bullets: [
      "Built a bidirectional security gateway that scans LLM prompts and responses in real time, combining regex, YARA rules, and ML models in a multi-stage detection pipeline.",
      "Implemented canary-token leak detection and a YAML-driven policy engine (allow/sanitize/challenge/block) with a real-time WebSocket incident console.",
    ],
  },
  {
    title: "UniHealth",
    subtitle: "Healthcare Interoperability Platform",
    tech: "Full Stack Development, Cyber-Security",
    bullets: [
      "Built a cloud-based healthcare interoperability platform enabling secure real-time hospital data exchange using APIs.",
      "Implemented role-based access control and a scalable patient identity system for secure inter-hospital coordination.",
    ],
  },
];

export const resumeEducation = [
  {
    school: "Thapar Institute of Engineering and Technology, Punjab",
    degree: "Bachelor's in Engineering - Mechatronics Engineering",
  },
  {
    school: "Amity International School, Sector-43, Gurugram",
    degree: "CBSE Senior Secondary Certificate Examination (Computer Science)",
  },
];

export const resumeHonors = [
  "AIM ATL Marathon – Top 500 Teams (Issued by NITI Ayog, Govt. of India)",
  "Amity Space Design Contest – First Position (Issued by Children's Science Foundation)",
];

export const resumeLeadership = [
  { org: "Mechatronics and Robotics Society, TIET", role: "Control and Automations Engineer" },
  { org: "Thapar Venture Club", role: "Operations Manager" },
];
