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
            development: {
                heading: "Development",
                subsections: [
                    {
                        heading: "Leaderboard",
                        insights: [
                            {
                                body: "I implemented a dedicated React Query hook to load leaderboard data based on context (general or friends). The hook dynamically switches endpoints and only attaches a Clerk bearer token for the friends view, which keeps public ranking lightweight while protecting private data. I also configured query keys and cache timing so leaderboard views feel responsive without unnecessary refetching.",
                                image: { src: "/projects/jargon/use-leaderboard.png", alt: "React Query hook for loading leaderboard data by context" },
                            },
                            {
                                body: "This controller is the global leaderboard backend endpoint. It fetches user records with the fields needed by the UI (identity, score, language, avatar config), orders users by score descending, and returns a consistent JSON payload. This ensures ranking is computed server-side and stays authoritative across clients.",
                                image: { src: "/projects/jargon/getLeaderboard.png", alt: "Backend getLeaderboard controller returning ranked users" },
                            },
                            {
                                body: "This screen shows the final leaderboard experience powered by the frontend hook and backend ranking endpoint. Users can see their position in a clear, gamified layout that combines score progression with profile/identity visuals. The UI demonstrates how API data is translated into an engaging, easy-to-scan competitive learning view.",
                                image: { src: "/projects/jargon/leaderboard-app.png", alt: "Final leaderboard UI in the Jargon app" },
                            },
                        ],
                    },
                    {
                        heading: "Database Seeding",
                        insights: [
                            {
                                body: "This screen is the learner-facing result of the seeding pipeline: a flashcard from the prebuilt “General” library, showing the term Plumb Bob and its English definition-the same concept that exists as structured JSON in our content files. Progress (“Card 5 of 10”), category badge, and flip interaction show how static data becomes an interactive study flow after it’s stored and served by the backend.",
                                image: { src: "/projects/jargon/flashcard-app.png", alt: "Jargon flashcard app screen for Plumb Bob" },
                            },
                            {
                                body: "Each flashcard is authored as a single JSON object: stable id, nested term and definition maps for seven languages, plus industry_id and level_id for filtering and progression. This example matches the card shown in the app for English, proving the pipeline from file -> database -> API -> UI. The other locales stay available for language preferences without separate decks per language.",
                                image: { src: "/projects/jargon/general-words-json.png", alt: "General words JSON structure for seeded flashcards" },
                            },
                            {
                                body: "The seeder loads levels.json, industries.json, and every industry *words*.json, then validates data before touching the database: cards must have a level_id, IDs must be unique, and foreign keys must point at real levels and industries. If anything is wrong, the script exits with a clear error so we never silently import broken rows-important when the content library is large and edited by multiple people.",
                                image: { src: "/projects/jargon/flashcard-seeder.png", alt: "Flashcard seeder validation logic" },
                            },
                            {
                                body: "Content authors work with nested objects (term.english, definition.korean, ...). The transformer flattens those into columns that match our Prisma schema (termEnglish, definitionFrench, ...) and renames metadata to camelCase (industryId, levelId). That separation keeps JSON ergonomic for writing and translating while the database stays easy to query and index.",
                                image: { src: "/projects/jargon/transformForDb.png", alt: "transformForDb mapping from JSON shape to Prisma columns" },
                            },
                        ],
                    },
                    {
                        heading: "Clerk + Ngrok implementation",
                        insights: [
                            {
                                body: "This route exposes a focused backend endpoint for Clerk events (POST /clerk under the webhook router). In development, Ngrok tunnels this local endpoint so Clerk can deliver real-time user lifecycle events (created/updated/deleted) to my local server. Keeping webhook routing isolated made auth integration easier to test and safer to evolve without touching feature routes.",
                                image: { src: "/projects/jargon/webhook-route.png", alt: "Webhook route for Clerk events in Hono backend" },
                            },
                            {
                                body: "After authentication, I sync Clerk identity data into MySQL: first checking for a valid primary email, then updating existing users or creating missing users with default app fields (like initial score). This ensures every authenticated session maps to a reliable internal user row, which is required by leaderboard, profile, and friends features. The flow is idempotent in practice: repeated requests keep user data fresh instead of creating duplicates.",
                                image: { src: "/projects/jargon/auth-middleware.png", alt: "Sync logic for Clerk user data into MySQL" },
                            },
                        ],
                    },
                ],
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
        role: "Full-Stack Developer Intern",
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
            { label: "GitHub Frontend", url: "https://github.com/BuiltByRobyn/strata-reserve-frontend" },
            { label: "GitHub Backend", url: "https://github.com/BuiltByRobyn/strata-reserve-backend" },
            { label: "Live App", url: "https://srp.builtbyrobyn.com/dashboard"}
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

        demoAccess: {
            heading: "Demo Access",
            note: "Use the demo accounts below to explore the portal with preconfigured access.",
            clientEmail: "client@client.com",
            adminEmail: "admin@admin.com",
            password: "Test1234!",
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

    {
        title: "Kicnic",
        slug: "kicnic",
        tagline: "Real-time picnic planning app with voting, weather insights, and live updates.",
        description: "Planning group events usually gets messy in chats, with availability updates getting lost and no single source of truth. Kicnic solves this by centralizing date voting into one web app where users can sign up/login, vote yes/no per day, and see weather forecasts for each date. I built the app end-to-end with a Node.js + Express backend and a vanilla JavaScript frontend, and added WebSockets so vote changes appear instantly for everyone connected.",

        tech: ["JavaScript (Vanilla)", "Node.js", "Express.js", "WebSocket (ws)", "HTML5", "CSS3", "cookie-session", "OpenWeatherMap API"],
        highlights: [
            "Built the full project end-to-end, including frontend UI flows, backend API design, and state refresh logic.",
        "Implemented authentication (signup, login, logout, session check) using cookie-based sessions.",
        "Developed voting APIs and interactive day cards that let users set, change, or clear availability.",
        "Integrated WebSockets for instant vote synchronization so all connected users see updates in real time.",
        "Connected weather forecasts to each date card and added client-side caching to reduce repeated API calls.",
        "Added a soft refresh control and resilient data fetching for session, votes, and weather state.",
        ],

        links: [
            { label: "GitHub", url: "https://github.com/KamilBozz/Kicnic" },
            { label: "Live App", url: "https://kicnic.onrender.com/" },
        ],
        thumbnail: {
            src: "/projects/kicnic/thumb.png",
            alt: "Kicnic thumbnail",
        },
        gallery: [
            { src: "/projects/kicnic/1.png", alt: "Kicnic screenshot 1" },
            { src: "/projects/kicnic/2.png", alt: "Kicnic screenshot 2" },
        ],

        video: {
            provider: "youtube",
            embedUrl: "https://youtube.com/embed/dA-8lyKl99k", // TODO: Replace with actual video ID
            title: "Kicnic demo video",
        },

        timeframe: "Feb 2025 - Apr 2025",
        role: "Full-Stack Developer",
        featured: false,
    },
]