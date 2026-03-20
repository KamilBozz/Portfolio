import { Container } from "../../components/layout/Container/Container";
import { GitHubCalendarBlock } from "../../components/github/GitHubCalendarBlock/GitHubCalendarBlock";
import { Link } from "react-router-dom";
import { Seo } from "../../components/seo/Seo";

export function AboutPage() {
  return (
    <Container>
      <Seo 
      title="About"
      description="About page of Kamil Bozkurt's portfolio"
      path="/about"
      />
      {/* HERO SECTION */}
      <section className="about-hero">
        <img className="about-hero__avatar" src="/avatar/avatar.png" alt="Kamil Bozkurt avatar" />

        <div className="about-hero__content">
          <h1 className="about-hero__title">About Me</h1>

          <p className="about-hero__lead">
          I'm Kamil, a Full-Stack Web Developer and BCIT FSWD grad. I build web apps with TypeScript, React, and modern backend tools, and I care about clean code and UI details that make a product feel solid. Have a look at my projects or get in touch if you'd like to connect.
          </p>

          <div className="about-facts">

            <div className="about-fact">
              <div className="about-fact__label">Focus</div>
              <div className="about-fact__value">TypeScript • JavaScript • React • Node</div>
            </div>

            {/* <div className="about-fact">
              <div className="about-fact__label">Goal</div>
              <div className="about-fact__value">Internship / Junior dev role</div>
            </div> */}
          </div>

          <div className="about-hero__actions">
            <Link className="btn" to="/projects">
              View Projects
            </Link>
            <a className="btn btn--secondary" href="/resume/Kamil-Bozkurt-Resume.pdf" download>
              Download Resume
            </a>
            <Link className="btn btn-ghost" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section">
        <h2 className="about-section__title">My Story</h2>

        <div className="about-story">
          <p>
          I started with a strong interest in technology and problem-solving, and I’ve been building that foundation through BCIT’s Full-Stack Web Development program.
          </p>
          <p>
          I enjoy turning ideas into real products—especially projects that have clear structure, good UX, and clean code. I prefer simple, understandable solutions over unnecessary complexity.
          </p>
          <p>
          Right now, I’m focused on improving my skills in TypeScript, React, backend APIs, and databases.
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="about-section">
        <h2 className="about-section__title">What I'm strong at</h2>

        <div className="about-highlights">
          <div className="about-card">
            <h3 className="about-card__title">Frontend</h3>
            <p className="about-card__text">
            Building responsive pages and reusable components with React and TypeScript.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card__title">Backend</h3>
            <p className="about-card__text">
            Designing routes, working with authentication patterns, and building APIs with Node.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-card__title">Design mindset</h3>
            <p className="about-card__text">
              I care about layout, spacing, and clarity. I use tools like Figma to plan before I
              build.
            </p>
          </div>
        </div>
      </section>

      {/* GITHUB */}
      <GitHubCalendarBlock username="KamilBozz" heading="GitHub Contributions"/>

      {/* CTA */}
      <section className="about-cta">
        <h2 className="about-cta__title">Let’s connect</h2>
        <p className="about-cta__text">
          If you’d like to chat about a project, internship, or collaboration, feel free to reach out.
        </p>
        <div className="about-cta__actions">
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
