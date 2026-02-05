import type { Project } from "../types/project"

export const projects: Project[] = [
    {
        title: "Jargon",
        slug: "jargon",
        tagline: "AI powered gamified learning PWA for industry terminology.",
        description: "Newcomers in the trades often have the skills but not the terminology-which can make it harder to get work, communicate on the job, and stay safe. Jargon is an AI-powered app that helps them learn industry language through flashcards, AI-generated quizzes, and gamification (badges, leaderboard, social features). It’s a Progressive Web App so learners can practice on their phone or at work. Our team built Jargon from scratch with a small group of designers and developers. I implemented the leaderboard, friends system, user profiles, and quiz flows, and worked with our designers on a clear, consistent UI.",
        tech: ["TypeScript", "React", "Vite", "TanStack Query", "Tailwind CSS", "SASS/SCSS", "Radix UI", "MySQL", "Prisma ORM", "Clerk", "Ngrok", "Hono"],
        highlights: [
            "Contributed to ~80% of the application, building core features including the Leaderboard, Friends system, User Profile, and major Home dashboard components in collaboration with cross-program designers.",
            "Developed complex UI and data flows using React, TypeScript, Vite, and TanStack Query for efficient server-state management.",
            "Built responsive, accessible interfaces using Tailwind CSS, SASS/SCSS, and Radix UI with a mobile-first approach.",
            "Designed, seeded, and queried the MySQL database using Prisma ORM; integrated Clerk authentication via Ngrok for automatic onboarding.",
            "Contributed to backend and application architecture using Node.js and Hono, working with modular structure and modern tooling.",
        ],
        links: [
            { label: "GitHub", url: "https://github.com/Jargon-IDSP"},
            { label: "Live", url: "https://www.jargon-app.ca"},
        ],
        thumbnail: { src: "/projects/jargon/thumb.png", alt: "Jargon project thumbnail"},
        gallery: [
            { src: "/projects/jargon/1.png", alt: "Jargon screenshot 1"},
            { src: "/projects/jargon/2.png", alt: "Jargon screenshot 2"},
            { src: "/projects/jargon/3.png", alt: "Jargon screenshot 3"},
            { src: "/projects/jargon/4.png", alt: "Jargon screenshot 4"},
            { src: "/projects/jargon/5.png", alt: "Jargon screenshot 5"},
        ],

        video: {
            provider: "youtube",
            embedUrl: "https://www.youtube.com/embed/BBseq_63lvU", // TODO: Replace with actual video ID
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
        description: "Many kids don’t learn how money is earned or how to manage it. MoneyMonsters connects parents and kids: parents create tasks with a money value, and kids complete tasks, set savings goals, and link completed tasks to a goal so the earned amount goes into that goal’s budget. Kids track progress and request approval from parents when a goal is met; parents can approve, deny, or leave the request pending. Our team of designers and developers built the app from scratch in an Agile environment.",

        tech: ["Node.js",  "JavaScript", "Express", "EJS", "SASS/SCSS", "MongoDB"],
        highlights: [
            "Built the Tasks and Goals system, enabling parent task assignment, child progress tracking, and goal linking, working closely with cross-program UI/UX designers.",
            "Implemented goal completion request workflows with pending, approved, and denied user feedback.",
            "Designed and updated MongoDB schemas and queries to support reward distribution, goal balances, and household data integrity.",
            "Developed full-stack features using Node.js, Express, EJS, and SASS, including session-based authentication, routing, and responsive modal workflows.",
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
            { src: "/projects/moneymonsters/3.png", alt: "MoneyMonsters screenshot 3" },
            { src: "/projects/moneymonsters/4.png", alt: "MoneyMonsters screenshot 4" },
        ],

        // Add video if needed
        video: {
            provider: "vimeo",
            embedUrl: "https://player.vimeo.com/video/1151273766", // TODO: Replace with actual video ID
            title: "MoneyMonsters demo video",
        },

        timeframe: "May 2025 - Jun 2025",
        role: "Full-Stack Developer",
        featured: true,
    },

    {
        title: "Express Documentation",
        slug: "express-documentation",
        tagline: "Beginner-friendly Express.js documentation: setup, routes, hosting, and troubleshooting.",
        description: "New developers often need a clear, step-by-step path to learn Express. We created documentation that walks through installation, building a basic web server, handling routes (GET, POST), content types, error handling, hosting, and troubleshooting. Our two-person team split the work and collaborated via Discord and GitHub. I led the project, wrote the step-by-step content, set up MkDocs with Material for MkDocs, and implemented dark/light mode for the documentation site.",

        tech: ["MkDocs", "Material for MkDocs", "Markdown", "GitHub", "Python"],
        highlights: [
            "Led a two-person team; split content and collaborated via Discord and GitHub.",
            "Wrote step-by-step sections and set up MkDocs with Material for MkDocs.",
            "Implemented dark/light mode for the documentation site.",
            "Focused on code examples, notes, and clear structure to make the guide easy for beginners to follow.",
        ],

        links: [
            { label: "GitHub", url: "https://github.com/KamilBozz/Express-Documentation" },
            { label: "Live", url: "https://kamilbozz.github.io/Express-Documentation/" },
        ],
        thumbnail: {
            src: "/projects/exxpressjs/thumb.png",
            alt: "Express Documentation thumbnail",
        },
        gallery: [
            { src: "/projects/exxpressjs/1.png", alt: "Express Documentation screenshot 1" },
            { src: "/projects/exxpressjs/2.png", alt: "Express Documentation screenshot 2" },
        ],

        video: {
            provider: "youtube",
            embedUrl: "https://youtube.com/embed/Kr64D7qPKm8", // TODO: Replace with actual video ID
            title: "Express.js Documentation demo video",
        },

        timeframe: "Feb 2025 - May 2025",
        role: "Co-author & Lead",
        featured: true,
    },
]