import { Container } from "../../components/layout/Container/Container";
import { GitHubCalendarBlock } from "../../components/github/GitHubCalendarBlock/GitHubCalendarBlock";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { ProjectCard } from "../../components/projects/ProjectCard/ProjectCard";
import { Seo } from "../../components/seo/Seo";

export function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <Container>
      <Seo 
      title="Home"
      description="Home page of Kamil Bozkurt's portfolio"
      path="/"
      />
      {/* HERO SECTION */}
      <section className="home-hero">
        <img 
        className="home-hero__avatar" 
        src="/avatar/avatar.png" 
        alt="Kamil Bozkurt avatar" />

        <div className="home-her__content">
          <h1 className="home-hero__title">Kamil Bozkurt</h1>
          <p className="home-hero__subtitle">Full Stack Web Developer • BCIT FSWD</p>

          <p className="home-hero__lead">
            I build clean, reliable web apps with TypeScript, React, and modern backend tools.
            Here are a few projects and ways to connect with me.
          </p>

          <div className="home-hero__actions">
            <Link className="btn" to="/projects">
              View Projects
            </Link>

          <a className="btn btn--secondary" href="/resume/Kamil-Bozkurt-Resume.pdf" download>
            Download Resume
          </a>

          <Link className="btn btn--ghost" to="/book">
            Book a Meeting
          </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="home-section">
        <div className="home-section__top">
          <h2 className="home-section__title">Featured Projects</h2>
          <Link className="home-section__link" to="/projects">View All</Link>
        </div>

        <div className="home-projects">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
            ))}
        </div>

        {!featured.length && (
          <p className="home-muted">
            No featured projects yet. Add <code>featured: true</code> to a few projects in{" "} <code>src/data/projects.ts</code>
          </p>
        )}
      </section>

      {/* SKILLS SNAPSHOT */}
      <section className="home-section">
        <div className="home-section__top">
          <h2 className="home-section__title">Skills</h2>
          <Link className="home-section__link" to="/skills">
          See more
          </Link>
        </div>

        <div>
          {[
            "TypeScript",
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "REST APIs",
            "SASS",
            "Git/GitHub",
            "Figma",
          ].map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* GITHUB */}
      <GitHubCalendarBlock username="KamilBozz" heading="GitHub Contributions"/>

      {/* CTA */}
      <section className="home-cta">
        <h2 className="home-cta__title">Want to connect?</h2>
        <p className="home-cta__text">
        If you’d like to talk about projects, internships, or collaboration, feel free to reach to.
        </p>
        <div className="home-cta__actions">
          <Link className="btn" to="/contact">
            Contact
          </Link>
          <Link className="btn btn--ghost" to="/book">
            Book a Meeting
          </Link>
        </div>
      </section>
    </Container>
  );
}
