import { NavLink } from "react-router-dom"
import { Container } from "../Container/Container"
import { ThemeToggle } from "../../theme/ThemeToggle/ThemeToggle.tsx"
import styles from "./Navbar.module.scss"

export function Navbar() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.row}>
                    <div className={styles.brand}>
                        <NavLink to="/">Kamil Bozkurt</NavLink>
                    </div>
                    <nav className={styles.nav}>
                        <NavLink className={styles.link} to="/about">
                            About
                        </NavLink>
                        <NavLink className={styles.link} to="/projects">
                            Projects
                        </NavLink>
                        <NavLink className={styles.link} to="/resume">
                            Resume
                        </NavLink>
                        <NavLink className={styles.link} to="/skills">
                            Skills
                        </NavLink>
                        <NavLink className={styles.link} to="/book">
                            Book
                        </NavLink>
                        <NavLink className={styles.link} to="/contact">
                            Contact
                        </NavLink>
                    </nav>

                    <ThemeToggle />
                </div>
            </Container>
        </header>
    )
}