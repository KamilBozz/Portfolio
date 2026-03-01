// export type SkillLevel = "Comfortable" | "Familiar" | "Learning";

export type SkillItem = {
  name: string;
  // level?: SkillLevel;
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
      { name: "Node.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "C#" },
      { name: "PHP" },
      { name: ".NET" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "OOP (Object-Oriented Programming)" },
    ],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Next.js" },
      { name: "JQuery" },
      { name: "Tailwind CSS" },
      { name: "SASS" },
      { name: "EJS" },
      { name: "Hono" },
    ],
  },
  {
    title: "Databases & Data Tools",
    items: [
        { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Prisma ORM" },
      { name: "Neon" },
    ],
  },
  {
    title: "APIs, Authentication & Backend Concepts",
    items: [
      { name: "REST APIs" },
      { name: "OAuth" },
      { name: "Auth0" },
      { name: "Clerk" },
      { name: "DOM" },
    ],
  },
  {
    title: "Deployments, DevOps & Platforms",
    items: [
      { name: "Vercel" },
      { name: "Render" },
      { name: "Ngrok" },
      { name: "Aiven" },
      { name: "CI/CD" },
      { name: "Virtual Machines (VM)" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Designs & UI/UX Designs",
    items: [
      { name: "Figma" },
      { name: "Adobe Photoshop" },
      { name: "Adobe Illustrator" },
      { name: "UI/UX Design Principles" },
    ],
  },
  {
    title: "Tools, Workflow & Collaboration",
    items: [
      { name: "GitHub" },
      { name: "Agile Methodologies" },
      { name: "Scrum" },
      { name: "Jira" },
      { name: "Trello" },
      { name: "Slack" },
    ],
  },
  {
    title: "Additional Technical & Business Knowledge",
    items: [
        { name: "Digital Marketing" },
      { name: "SEO" },
      { name: "E-commerce" },
      { name: "IT Law" },
    ],
  },
  {
    title: "Professional Skills",
    items: [
      { name: "Problem Solving" },
      { name: "Time Management" },
      { name: "Attention to Detail" },
      { name: "Working Independently" },
      { name: "Responsibility & Reliability" },
      { name: "Communication & Collaboration" },
    ],
  },
];
