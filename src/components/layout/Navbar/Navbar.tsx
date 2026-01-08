import { NavLink } from "react-router-dom"
import { Container } from "../Container/Container"
import { ThemeToggle } from "../../theme/ThemeToggle/ThemeToggle.tsx"

export function Navbar() {
    return (
        <header className="navbar">
            <Container>
                <div className="navbar-row">
                    <div className="navbar-brand">
                        <NavLink to="/">Kamil Bozkurt</NavLink>
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