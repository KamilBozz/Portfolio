import { NavLink } from "react-router-dom"
import { Container } from "../Container/Container"
import { ThemeToggle } from "../../theme/ThemeToggle/ThemeToggle.tsx"
import { useEffect, useState } from "react"

export function Navbar() {
    const [logoSrc, setLogoSrc] = useState("/logo/logo-hero.svg")

    useEffect(() => {
        const updateLogo = () => {
            const theme = document.documentElement.getAttribute("data-theme")
            setLogoSrc(theme === "light" ? "/logo/logo-hero.svg" : "/logo/logo-hero-light.svg")
        }

        // Set initial logo
        updateLogo()

        // Watch for theme changes
        const observer = new MutationObserver(updateLogo)
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"]
        })

        return () => observer.disconnect()
    }, [])

    return (
        <header className="navbar">
            <Container>
                <div className="navbar-row">
                    <div className="navbar-brand">
                        <NavLink to="/"><img src={logoSrc} alt="Kamil Bozkurt logo" /></NavLink>
                    </div>
                    <nav className="navbar-nav">
                        <NavLink className="navbar-link" to="/about">
                            About
                        </NavLink>
                        <NavLink className="navbar-link" to="/projects">
                            Projects
                        </NavLink>
                        <NavLink className="navbar-link" to="/resume">
                            Resume
                        </NavLink>
                        <NavLink className="navbar-link" to="/skills">
                            Skills
                        </NavLink>
                        <NavLink className="navbar-link" to="/book">
                            Book
                        </NavLink>
                        <NavLink className="navbar-link" to="/contact">
                            Contact
                        </NavLink>
                    </nav>

                    <ThemeToggle />
                </div>
            </Container>
        </header>
    )
}