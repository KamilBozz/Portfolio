import { Container } from "../../components/layout/Container/Container";
import { GitHubCalendarBlock } from "../../components/github/GitHubCalendarBlock/GitHubCalendarBlock";

export function HomePage() {
  return (
    <Container>
      <h1>Home</h1>
      <p>Welcome. This is the foundation.</p>

      <GitHubCalendarBlock username="KamilBozz" heading="GitHub Contributions"/>
    </Container>
  );
}
