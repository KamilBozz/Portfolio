import { Container } from "../../components/layout/Container/Container";
import { GitHubCalendarBlock } from "../../components/github/GitHubCalendarBlock/GitHubCalendarBlock";

export function AboutPage() {
  return (
    <Container>
      <h1>About</h1>
      <p>Welcome. This is the about page.</p>

      <GitHubCalendarBlock username="KamilBozz" heading="GitHub Contributions"/>
    </Container>
  );
}
