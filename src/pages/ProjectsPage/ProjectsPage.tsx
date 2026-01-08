import { Container } from "../../components/layout/Container/Container";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/projects/ProjectCard/ProjectCard";

export function ProjectsPage() {
  return (
    <Container>
      <h1>Projects</h1>
      <p className="projects-page__lead">
        A few projects I built during BCIT and personal work. Click a project to see details.
      </p>

      <div className="projects-page__grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </Container>
  );
}
