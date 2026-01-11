export type SkillLevel = "Comfortable" | "Familiar" | "Learning";

export type SkillItem = {
  name: string;
  level?: SkillLevel;
  notes?: string; // optional short note
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: [
      { name: "Node.js", level: "Comfortable" },
      { name: "JavaScript", level: "Comfortable" },
      { name: "TypeScript", level: "Comfortable" },
      { name: "C#", level: "Comfortable" },
      { name: "PHP", level: "Comfortable" },
      { name: ".NET", level: "Comfortable" },
      { name: "HTML5", level: "Comfortable" },
      { name: "CSS", level: "Comfortable" },
      { name: "OOP (Object-Oriented Programming)", level: "Comfortable" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      { name: "Express.js", level: "Comfortable" },
      { name: "React.js", level: "Comfortable" },
      { name: "Next.js", level: "Comfortable" },
      { name: "JQuery", level: "Comfortable" },
      { name: "Tailwind CSS", level: "Familiar" },
      { name: "SASS", level: "Comfortable" },
      { name: "EJS", level: "Comfortable" },
      { name: "Hono", level: "Familiar" },
    ],
  },
  {
    title: "Databases & Data Tools",
    items: [
      { name: "MySQL", level: "Comfortable" },
      { name: "PostgreSQL", level: "Comfortable" },
      { name: "MongoDB", level: "Comfortable" },
      { name: "Prisma ORM", level: "Comfortable" },
      { name: "Neon", level: "Familiar" },
    ],
  },
  {
    title: "APIs, Authentication & Backend Concepts",
    items: [
      { name: "REST APIs", level: "Comfortable" },
      { name: "OAuth", level: "Comfortable" },
      { name: "Auth0", level: "Comfortable" },
      { name: "Clerk", level: "Comfortable" },
      { name: "DOM", level: "Comfortable" },
    ],
  },
  {
    title: "Deployments, DevOps & Platforms",
    items: [
      { name: "Vercel", level: "Comfortable" },
      { name: "Render", level: "Comfortable" },
      { name: "Ngrok", level: "Comfortable" },
      { name: "Aiven", level: "Comfortable" },
      { name: "CI/CD", level: "Comfortable" },
      { name: "Virtual Machines (VM)", level: "Familiar" },
      { name: "Supabase", level: "Familiar" },
    ],
  },
  {
    title: "Designs & UI/UX Designs",
    items: [
      { name: "Figma", level: "Comfortable" },
      { name: "Adobe Photoshop", level: "Comfortable" },
      { name: "Adobe Illustrator", level: "Familiar" },
      { name: "UI/UX Design Principles", level: "Comfortable" },
    ],
  },
  {
    title: "Tools, Workflow & Collaboration",
    items: [
      { name: "GitHub", level: "Comfortable" },
      { name: "Agile Methodologies", level: "Comfortable" },
      { name: "Scrum", level: "Comfortable" },
      { name: "Jira", level: "Comfortable" },
      { name: "Trello", level: "Comfortable" },
      { name: "Slack", level: "Comfortable" },
    ],
  },
  {
    title: "Additional Technical & Business Knowledge",
    items: [
      { name: "Digital Marketing", level: "Comfortable" },
      { name: "SEO", level: "Comfortable" },
      { name: "E-commerce", level: "Comfortable" },
      { name: "IT Law", level: "Comfortable" },
    ],
  },
  {
    title: "Professional Skills",
    items: [
      { name: "Problem Solving", level: "Comfortable" },
      { name: "Time Management", level: "Comfortable" },
      { name: "Attention to Detail", level: "Comfortable" },
      { name: "Working Independently", level: "Comfortable" },
      { name: "Responsibility & Reliability", level: "Comfortable" },
      { name: "Communication & Collaboration", level: "Comfortable" },
    ],
  },
];
