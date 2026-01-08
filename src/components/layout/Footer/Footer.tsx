import { Container } from "../Container/Container"

export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <div className="footer-row">
                    <div>© {year} Kamil Bozkurt</div>
                    <div className="footer-muted">Built with React + TypeScript</div>
                </div>
            </Container>
        </footer>
    )
}