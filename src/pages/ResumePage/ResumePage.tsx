import { Container } from "../../components/layout/Container/Container";
import { resumeData } from "../../data/resume";

export function ResumePage() {
  return (
    <Container>
      <div className="resume-page__top">
        <div>
          <h1 className="resume-page__name">{resumeData.name}</h1>
          <p className="resume-page__title">{resumeData.title}</p>
          <p className="resume-page__meta">
            {resumeData.location} • {resumeData.email}
          </p>
        </div>

        <div className="resume-page__buttons">
          <a className="resume-page__btn" href="/resume/Kamil-Bozkurt-Resume.pdf" download>
            Download PDF
          </a>
          <a
            className="resume-page__btn resume-page__btn--secondary"
            href="/resume/Kamil-Bozkurt-Resume-ATS.docx"
            download
          >
            Download ATS (DOCX)
          </a>
        </div>
      </div>

      <section className="resume-page__section">
        <h2>Summary</h2>
        <ul className="resume-page__list">
          {resumeData.summary.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="resume-page__section">
        <h2>Experience</h2>
        <div className="resume-page__stack">
          {resumeData.experience.map((job) => (
            <div key={job.company} className="resume-page__item">
              <div className="resume-page__item-top">
                <strong>{job.company}</strong>
                <span className="resume-page__muted">{job.dates}</span>
              </div>
              <div className="resume-page__muted">{job.location}</div>
              <ul className="resume-page__list">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-page__section">
        <h2>Education</h2>
        <div className="resume-page__stack">
          {resumeData.education.map((ed) => (
            <div key={ed.school} className="resume-page__item">
              <div className="resume-page__item-top">
                <strong>{ed.school}</strong>
                <span className="resume-page__muted">{ed.dates}</span>
              </div>
              <div className="resume-page__muted">{ed.program}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-page__section">
        <h2>Skills</h2>
        <div className="resume-page__skills">
          <div>
            <h3>Frontend</h3>
            <div className="resume-page__chips">
              {resumeData.skills.frontend.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Backend</h3>
            <div className="resume-page__chips">
              {resumeData.skills.backend.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Databases</h3>
            <div className="resume-page__chips">
              {resumeData.skills.databases.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Tools</h3>
            <div className="resume-page__chips">
              {resumeData.skills.tools.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
