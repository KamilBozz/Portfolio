import { Link } from "react-router-dom";
import { Container } from "../../components/layout/Container/Container";

export function NotFoundPage() {
  return (
    <Container>
      <h1>Page not found</h1>
      <p>
        Go back <Link to="/">home</Link>.
      </p>
    </Container>
  );
}
