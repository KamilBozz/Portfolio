import type { Project } from "../../../types/project";
import { Link } from "react-router-dom";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const isCaseStudy = project.slug === "jargon" || !!project.caseStudy;

  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      <div className="project-card__thumb-wrap">
        <img
          className="project-card__thumb"
          src={project.thumbnail.src}
          alt={project.thumbnail.alt}
        />
      </div>

      <div className="project-card__body">
        <div className="project-card__title-row">
          <h3 className="project-card__title">{project.title}</h3>
          {isCaseStudy && <span className="project-card__badge">Case Study</span>}
        </div>
        <p className="project-card__tagline">{project.tagline}</p>

        <div className="project-card__tech-row">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="project-card__tech">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
