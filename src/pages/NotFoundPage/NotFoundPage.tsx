import { Link } from "react-router-dom";
import { Container } from "../../components/layout/Container/Container";
import { Seo } from "../../components/seo/Seo";

export function NotFoundPage() {
  return (
    <Container>
      <Seo title="Not Found" path="/404" />

      <h1>Page not found</h1>
      <p className="notfound__lead">
        The page you’re looking for doesn’t exist. Try going back home or checking Projects.
      </p>

      <div className="notfound__actions">
        <Link className="btn" to="/">
          Go Home
        </Link>
        <Link className="btn btn--ghost" to="/projects">
          View Projects
        </Link>
      </div>
    </Container>
  );
}
