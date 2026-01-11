import type { Project } from "../types/project"

export const projects: Project[] = [
    {
        title: "Jargon",
        slug: "jargon",
        tagline: "AI powered gamified learning PWA for industry terminology.",
        description: "A collaborative Progressive Web App that helps users learn industry-specific terms through quizzes, badges, and social features.",
        tech: ["TypeScript", "React", "Vite", "TanStack Query", "Tailwind CSS", "SASS/SCSS", "Radix UI", "MySQL", "Prisma ORM", "Clerk", "Ngrok", "Hono"],
        highlights: [
            "Contributed to ~80% of the application, building core features including the Leaderboard, Friends system, User Profile, and major Home dashboard components in collaboration with cross-program designers.",
            "Built quiz flows and badge progression.",
            "Designed a clean UI with reusable components.",
            "Worked in a team with Git + Jira workflow and Agile methodologies.",
        ],
        links: [
            { label: "GitHub", url: "https://github.com/Jargon-IDSP"},
            { label: "Live", url: "https://www.jargon-app.ca"},
        ],
        thumbnail: { src: "/projects/jargon/thumb.png", alt: "Jargon project thumbnail"},
        gallery: [
            { src: "/projects/jargon/1.png", alt: "Jargon screenshot 1"},
            { src: "/projects/jargon/2.png", alt: "Jargon screenshot 2"},
        ],

        video: {
            provider: "youtube",
            embedUrl: "https://www.youtube.com/embed/VIDEO_ID", // TODO: Replace with actual video ID
            title: "Jargon demo video",
        },

        timeframe: "Sep 2025 - Dec 2025",
        role: "Full-Stack Developer",
        featured: true,
    },

    {
        title: "MoneyMonsters",
        slug: "moneymonsters",
        tagline: "Budgeting app for parents & kids with tasks, rewards, and goals.",
        description: "Collaborative full-stack web app to help parents teach kids budgeting through tasks, rewards, and savings goals.",

        tech: ["Node.js",  "JavaScript", "Express", "EJS", "SASS/SCSS", "MongoDB"],
        highlights: [
            "Built Tasks and Goals systems with clear status states.",
            "Implemented goal completion request workflow (pending/approved/denied).",
            "Collaborated with UI/UX designers to match designs.",
        ],

        links: [
            { label: "GitHub", url: "https://github.com/IDSP-Project/MoneyMonstersV2" },
            { label: "Live", url: "https://moneymonstersv2.onrender.com/" }
        ],
        thumbnail: { 
            src: "/projects/moneymonsters/thumb.svg",
            alt: "MoneyMonsters project thumbnail",
        },
        gallery: [
            { src: "/projects/moneymonsters/1.png", alt: "MoneyMonsters screenshot 1" },
            { src: "/projects/moneymonsters/2.png", alt: "MoneyMonsters screenshot 2" },
        ],

        // Add video if needed

        timeframe: "May 2025 - Jun 2025",
        role: "Full-Stack Developer",
        featured: true,
    }
]