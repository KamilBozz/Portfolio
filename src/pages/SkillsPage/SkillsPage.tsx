import { Container } from "../../components/layout/Container/Container";
import { skillCategories } from "../../data/skills";
import { Seo } from "../../components/seo/Seo";

export function SkillsPage() {
  return (
    <Container>
      <Seo
        title="Skills"
        description="Kamil Bozkurt’s technical skills: TypeScript, React, Node.js, databases, and tools."
        path="/skills"
      />

      <h1>Skills</h1>
      <p className="skills-page__lead">
        A quick overview of the tools and technologies I use most often. (Levels are just for
        clarity and can change as I learn.)
      </p>

      <div className="skills-page__legend">
        <span className="skills-badge skills-badge--comfortable">Comfortable</span>
        <span className="skills-badge skills-badge--familiar">Familiar</span>
        <span className="skills-badge skills-badge--learning">Learning</span>
      </div>

      <div className="skills-page__grid">
        {skillCategories.map((cat) => (
          <section key={cat.title} className="skills-card">
            <h2 className="skills-card__title">{cat.title}</h2>

            <div className="skills-card__chips">
              {cat.items.map((item) => (
                <span key={item.name} className="skills-chip">
                  <span className="skills-chip__name">{item.name}</span>

                  {item.level && (
                    <span
                      className={
                        item.level === "Comfortable"
                          ? "skills-chip__level skills-chip__level--comfortable"
                          : item.level === "Familiar"
                          ? "skills-chip__level skills-chip__level--familiar"
                          : "skills-chip__level skills-chip__level--learning"
                      }
                    >
                      {item.level}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
