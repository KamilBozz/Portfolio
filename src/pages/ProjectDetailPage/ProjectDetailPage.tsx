import { Link, useParams } from "react-router-dom";
import { Container } from "../../components/layout/Container/Container";
import { projects } from "../../data/projects";
import { ProjectGallery } from "../../components/projects/ProjectGallery/ProjectGallery";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container>
        <h1>Project not found</h1>
        <p>
          Go back to <Link to="/projects">Projects</Link>.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <Link className="project-detail__back" to="/projects">
        ← Back to Projects
      </Link>


      <div className="project-detail__grid">
        <section className="project-detail__left">
      <h1 className="project-detail__title">{project.title}</h1>
      <p className="project-detail__tagline">{project.tagline}</p>

      <div className="project-detail__meta">
        {project.role && <span>{project.role}</span>}
        {project.timeframe && <span> • {project.timeframe}</span>}
      </div>

      <div className="project-detail__links">
        {project.links.map((l) => (
          <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>
          <h2>Overview</h2>
          <p className="project-detail__desc">{project.description}</p>

          <h2>Highlights</h2>
          <ul className="project-detail__list">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <h2>Tech</h2>
          <div className="project-detail__tech-row">
            {project.tech.map((t) => (
              <span key={t} className="project-detail__tech">
                {t}
              </span>
            ))}
          </div>

          {project.video && (
            <>
              <h2>Video</h2>
              <div className="project-detail__video">
                <iframe
                  src={project.video.embedUrl}
                  title={project.video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </>
          )}
        </section>

        <aside className="project-detail__right">
          <h2>Screenshots</h2>
          <ProjectGallery images={project.gallery} />
        </aside>
      </div>
    </Container>
  );
}
