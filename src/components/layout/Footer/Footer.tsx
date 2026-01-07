import { Container } from "../Container/Container"
import styles from "./Footer.module.scss"

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.row}>
                    <div>© {year} Kamil Bozkurt</div>
                    <div className={styles.muted}>Built with React + TypeScript</div>
                </div>
            </Container>
        </footer>
    )
}