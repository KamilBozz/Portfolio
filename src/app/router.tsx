import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout/PageLayout";
import { HomePage } from "../pages/HomePage/HomePage"
import { AboutPage } from "../pages/AboutPage/AboutPage"
import { ResumePage } from "../pages/ResumePage/ResumePage"
import { SkillsPage } from "../pages/SkillsPage/SkillsPage"
import { ProjectsPage } from "../pages/ProjectsPage/ProjectsPage"
import { ProjectDetailPage } from "../pages/ProjectDetailPage/ProjectDetailPage"
import { BookPage } from "../pages/BookPage/BookPage"
import { ContactPage } from "../pages/ContactPage/ContactPage"
import { NotFoundPage } from "../pages/NotFoundPage/NotFoundPage"

export const router = createBrowserRouter([
    {
        element: <PageLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/resume", element: <ResumePage /> },
            { path: "/skills", element: <SkillsPage /> },
            { path: "/projects", element: <ProjectsPage /> },
            { path: "/projects/:slug", element: <ProjectDetailPage /> },
            { path: "/book", element: <BookPage /> },
            { path: "/contact", element: <ContactPage />},
            { path: "*", element: <NotFoundPage /> },
        ],
    },
]);