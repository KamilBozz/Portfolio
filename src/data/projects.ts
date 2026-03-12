import type { Project } from "../types/project"

export const projects: Project[] = [
    {
        title: "Jargon",
        slug: "jargon",
        tagline: "AI powered gamified learning Progressive Web App (PWA) for industry terminology.",
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
            { label: "Live App", url: "https://www.jargon-app.ca"},
            { label: "Instagram", url: "https://www.instagram.com/jargon.app/"},
            { label: "Website", url: "https://jargon-app.framer.website/"},
        ],
        thumbnail: { src: "/projects/jargon/thumb.png", alt: "Jargon project thumbnail"},
        gallery: [
            { src: "/projects/jargon/1.png", alt: "Jargon screenshot 1"},
            { src: "/projects/jargon/2.png", alt: "Jargon screenshot 2"},
            { src: "/projects/jargon/3.png", alt: "Jargon screenshot 3"},
            { src: "/projects/jargon/4.png", alt: "Jargon screenshot 4"},
            { src: "/projects/jargon/5.png", alt: "Jargon screenshot 5"},
        ],

        caseStudy: {
            overviewShort:
                "Jargon is a mobile-first, AI-powered PWA that helps trade newcomers learn industry terminology through flashcards and AI-generated quizzes. It adds motivation with gamification (badges, leaderboard, social features) so learners can build confidence faster and communicate clearly on real job sites.",
            heroImage: { src: "/projects/jargon/ready-to-go-course.gif", alt: "Jargon app preview" },
            problem: {
                heading: "Problem",
                body: [
                    "Newcomers can have strong hands-on skills, but missing terminology makes communication harder on the job.",
                    "That gap can slow onboarding, reduce confidence, and increase the risk of mistakes in fast-paced environments.",
                ],
                image: { src: "/projects/jargon/community.gif", alt: "Learning and quiz experience preview" },
            },
            myRole: {
                heading: "My Role",
                body: [
                    "Contributed ~80% of the application—building the Dashboard, Leaderboard, Friends system, User Profile, and Friend Profile end-to-end (backend and frontend), plus additional features.",
                    "Designed, seeded, and queried the MySQL database using Prisma, including built-in questions, flashcards, and their translated versions.",
                    "Integrated Clerk authentication with Ngrok webhooks to sync users from Clerk into the database in real time.",
                    "Collaborated with a cross-program design team on UI/UX and product decisions.",
                    "Worked in an Agile environment throughout the project.",
                ],
            },
            keyFeatures: {
                heading: "Key features",
                items: [
                    {
                        title: "AI Document Translate & Generate",
                        description:
                            "Learners upload real documents from their job, and Jargon uses AI to extract key terms, translate them into one of six supported languages, and generate flashcards and quizzes from that content. Practice stays anchored to the language they actually encounter at work.",
                    },
                    {
                        title: "Ready-to-go Courses",
                        description:
                            "Curated decks and quizzes are organized by trade and level so newcomers can follow a clear path instead of starting from a blank slate. Each course builds vocabulary step-by-step with built-in review.",
                    },
                    {
                        title: "Friends & Social Learning",
                        description:
                            "A friends system lets learners connect with classmates or coworkers, see each other’s progress, and share quizzes. Learning feels more like doing it together than studying alone.",
                    },
                    {
                        title: "Community & Leaderboards",
                        description:
                            "Leaderboards and shared content add a light, friendly competition on top of practice. Seeing how others are progressing helps keep learners motivated over time.",
                    },
                ],
                image: { src: "/projects/jargon/upload.gif", alt: "Key features preview" },
            },
            design: {
                heading: "Design",
                body: [
                    "We worked closely with a cross-program design team to shape the information architecture and interactions for core flows like onboarding, learning, quizzes, and community features.",
                    "The UI system focused on clarity and consistency across screens, with reusable patterns for cards, progress states, and feedback so the app feels cohesive while users move between features.",
                ],
                screensImage: { src: "/projects/jargon/Jargon-Screens.png", alt: "Jargon design screens overview" },
            },
            research: {
                heading: "Research",
                body: [
                    "To align the product with real learning needs, we documented key user groups and mapped how they would discover, learn, practice, and track progress inside the app.",
                    "Personas helped us prioritize features and tone, while the user flow ensured the experience stayed simple across core paths like onboarding, learning, quiz practice, and community interactions.",
                ],
                personas: [
                    {
                        title: "Persona 1",
                        pdfUrl: "/projects/jargon/Persona-Joyce.pdf",
                        thumbnail: { src: "/projects/jargon/Persona-Joyce.png", alt: "Persona 1 preview" },
                    },
                    {
                        title: "Persona 2",
                        pdfUrl: "/projects/jargon/Persona-Aarav.pdf",
                        thumbnail: { src: "/projects/jargon/Persona-Aarav.png", alt: "Persona 2 preview" },
                    },
                    {
                        title: "Persona 3",
                        pdfUrl: "/projects/jargon/Persona-Bryan.pdf",
                        thumbnail: { src: "/projects/jargon/Persona-Bryan.png", alt: "Persona 3 preview" },
                    },
                ],
                userFlowEmbedUrl: "https://embed.figma.com/design/EwNmZzET5XaZsHIzj6G7mt/Jargon-UserFlow?node-id=0-1&embed-host=share",
            },
            figmaEmbedUrl: "https://embed.figma.com/design/rBUiQnUt7nza4K8woaQYyB/Untitled?node-id=0-1&embed-host=share",
            marketingPromotion: {
                heading: "Marketing, Promotion",
                body: [
                    "Jargon was presented at a high-profile pitch event attended by more than 300 participants, including the Mayor of Burnaby, Members of Parliament, trade professionals, and local business leaders. The presentation included a live product demonstration followed by a Q&A session. The project was positively received and recognized as a practical tool to support individuals entering skilled trades.",
                ],
                videoEmbedUrl: "https://youtube.com/embed/I_bWL37IU5M",
                videoTitle: "Jargon pitch and presentation",
                booth: {
                    body: [
                        "Our team had a booth at the event where we showcased Jargon and talked with attendees, partners, and judges.",
                    ],
                    // Replace with your booth photo paths under public/projects/jargon/booth/
                    images: [
                        { src: "/projects/jargon/booth1.jpeg", alt: "Jargon booth at the event" },
                        { src: "/projects/jargon/booth2.jpeg", alt: "Booth setup" },
                        { src: "/projects/jargon/booth3.png", alt: "Team at the booth" },
                        { src: "/projects/jargon/booth4.jpeg", alt: "Team at the booth" },
                    ],
                },
            },
            reflection: {
                heading: "Reflection",
                body: [
                    "Building Jargon from end to end, from the database and API to the React UI and deployment, gave me a much clearer understanding of how product, design, and engineering decisions connect in a real project. It also helped me focus more on writing clear code and designing simple UX so features like the friends system and leaderboard could stay easy to maintain as the app grows.",
                    "Working closely with designers in an Agile setup and presenting the project at a large event also showed me how important communication and iteration are. This project reminded me that building good software isn’t only about technology, it’s about solving real problems for real users.",
                ],
            },
        },

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
        title: "Strata Reserve Planning Depreciation Portal",
        slug: "strata-reserve-planning-depreciation-portal",
        tagline: "A multi-role property management platform for strata reserve planning and depreciation reporting.",
        description: [
            "Strata Reserve Planning needed a secure way to manage the full depreciation report workflow in one place—without juggling spreadsheets, email threads, and disconnected tools. The SRP Depreciation Portal was built to centralize client onboarding, surveys, document requests, inspection scheduling, and draft-meeting coordination into a single, trackable process.",
            "The app includes four tiers of users—Admin, Assistant, Inspector, and Strata Client—each with a tailored experience and access level. Because the portal handles confidential strata documentation and planning data, it is built as an internal, access-controlled platform, not a public application.",
        ],

        tech: ["React", "TypeScript", "Hono", "Prisma", "SCSS/SASS", "PostgreSQL", "Supabase", "Dropbox"],
        highlights: [
            "Designed end-to-end user flows for four roles (Admin, Assistant, Inspector, Strata Client), mapping intake, document submission, review gates, scheduling, and follow-up steps into a clear workflow.",
            "Built role-based navigation and dashboards in React + TypeScript, ensuring each user tier sees the correct pages, actions, and status-based locks.",
            "Implemented in-app calendar scheduling for inspections/meetings, including availability slots and workflow rules that unlock scheduling only after required approvals.",
            "Created a consistent UI styling system with SCSS/SASS, setting up reusable layout patterns and styling foundations used across multiple screens.",
            "Integrated backend workflows using Hono + Prisma + PostgreSQL (Supabase), supporting role permissions, progress states, and structured form/survey data.",
            "Connected document handling to Dropbox for organized file storage and archiving, supporting version-friendly upload/replace behavior after submission.",
        ],

        links: [
            { label: "GitHub", url: "https://github.com/orgs/IDSP-Strata-Reserve-Planning/repositories" },
            // { label: "Live App", url: "https://moneymonstersv2.onrender.com/" }
        ],
        thumbnail: { 
            src: "/projects/strata-reserve-planning/thumb.svg",
            alt: "Strata Reserve Planning Depreciation Portal project thumbnail",
        },
        gallery: [
            { src: "/projects/strata-reserve-planning/1.png", alt: "Strata Reserve Planning Depreciation Portal screenshot 1" },
            { src: "/projects/strata-reserve-planning/2.png", alt: "Strata Reserve Planning Depreciation Portal screenshot 2" },
            { src: "/projects/strata-reserve-planning/3.png", alt: "Strata Reserve Planning Depreciation Portal screenshot 3" },
            { src: "/projects/strata-reserve-planning/4.png", alt: "Strata Reserve Planning Depreciation Portal screenshot 4" },
            { src: "/projects/strata-reserve-planning/5.png", alt: "Strata Reserve Planning Depreciation Portal screenshot 5" },
        ],

        video: {
            provider: "vimeo",
            embedUrl: "https://player.vimeo.com/video/1172342877?h=0ec0c7522a",
            title: "Strata Reserve Planning Depreciation Portal demo video",
        },

        timeframe: "Jan 2026 - Apr 2026",
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
            { label: "Live App", url: "https://moneymonstersv2.onrender.com/" }
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
            { label: "Live App", url: "https://kamilbozz.github.io/Express-Documentation/" },
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