import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar"
import { Footer } from "../Footer/Footer"

export function PageLayout() {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}