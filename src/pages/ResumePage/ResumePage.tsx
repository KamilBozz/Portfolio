import type { MouseEvent } from "react";
import { Container } from "../../components/layout/Container/Container";
import { resumeData } from "../../data/resume";

export function ResumePage() {
  const handleResumeDownload = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const fileUrl = "/resume/Kamil-Bozkurt-Resume.pdf";
    const fileName = "Kamil-Bozkurt-Resume.pdf";

    // Open the PDF in a new tab
    window.open(fileUrl, "_blank", "noopener,noreferrer");

    // Trigger download explicitly
    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = fileName;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <Container>
      <div className="resume-page__top">
        <div>
          <h1 className="resume-page__name">{resumeData.name}</h1>
          <p className="resume-page__title">{resumeData.title}</p>
          <p className="resume-page__meta">
            {resumeData.location}
          </p>
        </div>

        <div className="resume-page__buttons">
          <a
            className="resume-page__btn"
            href="/resume/Kamil-Bozkurt-Resume.pdf"
            onClick={handleResumeDownload}
          >
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
        <h2>Skills</h2>
        <div className="resume-page__skills">
        <div>
            <h3>Programming Languages</h3>
            <div className="resume-page__chips">
              {resumeData.skills.programmingLanguages.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Libraries & Frameworks</h3>
            <div className="resume-page__chips">
              {resumeData.skills.librariesAndFrameworks.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Databases & Tools</h3>
            <div className="resume-page__chips">
              {resumeData.skills.databasesAndTools.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>APIs, Authentication & Backend Concepts</h3>
            <div className="resume-page__chips">
              {resumeData.skills.apisAndAuthentication.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Deployments, DevOps & Platforms</h3>
            <div className="resume-page__chips">
              {resumeData.skills.deploymentsDevopsPlatforms.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Designs & UI/UX Designs</h3>
            <div className="resume-page__chips">
              {resumeData.skills.designsUiUx.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Tools, Workflow & Collaboration</h3>
            <div className="resume-page__chips">
              {resumeData.skills.toolsWorkflowCollaboration.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Additional Technical & Business Knowledge</h3>
            <div className="resume-page__chips">
              {resumeData.skills.additionalTechnicalBusinessKnowledge.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3>Professional Skills</h3>
            <div className="resume-page__chips">
              {resumeData.skills.professionalSkills.map((s) => (
                <span key={s} className="chip2">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
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
    </Container>
  );
}
