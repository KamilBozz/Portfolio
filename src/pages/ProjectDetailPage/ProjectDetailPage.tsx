import { useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container/Container";

export function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <Container>
      <h1>Project Detail</h1>
      <p>Slug: {slug}</p>
    </Container>
  );
}
