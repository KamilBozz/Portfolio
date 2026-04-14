import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Container } from "../../components/layout/Container/Container";
import { projects } from "../../data/projects";
import { ProjectGallery } from "../../components/projects/ProjectGallery/ProjectGallery";
import type { ProjectImage } from "../../types/project";

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

  const isJargonCaseStudy = project.slug === "jargon" && !!project.caseStudy;
  const [lightboxImage, setLightboxImage] = useState<ProjectImage | null>(null);
  const [boothGalleryIndex, setBoothGalleryIndex] = useState(0);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, closeLightbox]);

  return (
    <Container>
      <Link className="project-detail__back" to="/projects">
        ← Back to Projects
      </Link>

      {isJargonCaseStudy ? (
        <div className="project-detail__caseStudy">
          <section className="caseStudySection caseStudySection--hero">
            <div className="caseStudySection__text">
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
              <p className="project-detail__desc">{project.caseStudy!.overviewShort}</p>
            </div>

            <div className="caseStudySection__media">
              <button
                type="button"
                className="caseStudyImageButton"
                onClick={() => setLightboxImage(project.caseStudy!.heroImage)}
                aria-label="View full size"
              >
                <img
                  className="caseStudyImage"
                  src={project.caseStudy!.heroImage.src}
                  alt={project.caseStudy!.heroImage.alt}
                  loading="lazy"
                />
              </button>
            </div>
          </section>

          <section className="caseStudySection caseStudySection--mediaFirst">
            <div className="caseStudySection__media">
              <button
                type="button"
                className="caseStudyImageButton"
                onClick={() => setLightboxImage(project.caseStudy!.problem.image)}
                aria-label="View full size"
              >
                <img
                  className="caseStudyImage"
                  src={project.caseStudy!.problem.image.src}
                  alt={project.caseStudy!.problem.image.alt}
                  loading="lazy"
                />
              </button>
            </div>

            <div className="caseStudySection__text">
              <h2>{project.caseStudy!.problem.heading}</h2>
              <ul className="project-detail__list">
                {project.caseStudy!.problem.body.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              {project.caseStudy!.myRole && (
                <>
                  <h2>{project.caseStudy!.myRole.heading}</h2>
                  <ul className="project-detail__list">
                    {project.caseStudy!.myRole.body.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>

          {project.caseStudy!.keyFeatures && (
            <section className="caseStudySection">
              <div className="caseStudySection__text">
                <h2>{project.caseStudy!.keyFeatures.heading}</h2>
                <div className="project-detail__key-features">
                  <ul className="project-detail__list">
                    {project.caseStudy!.keyFeatures.items.map((feature) => (
                      <li key={feature.title}>
                        <strong>{feature.title}.</strong> {feature.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="caseStudySection__media">
                <button
                  type="button"
                  className="caseStudyImageButton"
                  onClick={() => setLightboxImage(project.caseStudy!.keyFeatures!.image)}
                  aria-label="View full size"
                >
                  <img
                    className="caseStudyImage"
                    src={project.caseStudy!.keyFeatures.image.src}
                    alt={project.caseStudy!.keyFeatures.image.alt}
                    loading="lazy"
                  />
                </button>
              </div>
            </section>
          )}

          {project.video && (
            <section className="caseStudySection caseStudySection--full">
              <div className="caseStudySection__text">
                <h2>Walkthrough</h2>
                <div className="project-detail__video project-detail__video--large">
                  <iframe
                    src={project.video.embedUrl}
                    title={project.video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </section>
          )}

          {(project.caseStudy!.design || project.caseStudy!.figmaEmbedUrl) && (
            <section className="caseStudySection caseStudySection--full caseStudySection--figma">
              <div className="caseStudySection__text">
                {project.caseStudy!.design && (
                  <>
                    <h2>{project.caseStudy!.design.heading}</h2>
                    {project.caseStudy!.design.body.map((p) => (
                      <p key={p} className="project-detail__desc">
                        {p}
                      </p>
                    ))}
                    {project.caseStudy!.design.screensImage && (
                      <div className="screens-image">
                        <button
                          type="button"
                          className="caseStudyImageButton"
                          onClick={() => setLightboxImage(project.caseStudy!.design!.screensImage!)}
                          aria-label="View full size"
                        >
                          <img
                            src={project.caseStudy!.design.screensImage.src}
                            alt={project.caseStudy!.design.screensImage.alt}
                            loading="lazy"
                          />
                        </button>
                      </div>
                    )}
                  </>
                )}

                {project.caseStudy!.figmaEmbedUrl && (
                  <div className="project-detail__figma">
                    <iframe
                      src={project.caseStudy!.figmaEmbedUrl}
                      title="Figma design"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </section>
          )}

          {project.caseStudy!.research && (
            <section className="caseStudySection caseStudySection--full caseStudySection--research">
              <div className="caseStudySection__text">
                <h2>{project.caseStudy!.research.heading}</h2>
                {project.caseStudy!.research.body.map((p) => (
                  <p key={p} className="project-detail__desc">
                    {p}
                  </p>
                ))}

                {project.caseStudy!.research.personas?.length ? (
                  <>
                    <h3 className="caseStudySubheading">Personas</h3>
                    <div className="personaGrid">
                      {project.caseStudy!.research.personas.map((persona) => (
                        <a
                          key={persona.pdfUrl}
                          className="personaCard"
                          href={persona.pdfUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div className="personaCard__thumb">
                            {persona.thumbnail ? (
                              <img
                                src={persona.thumbnail.src}
                                alt={persona.thumbnail.alt}
                                loading="lazy"
                              />
                            ) : (
                              <div className="personaCard__thumbPlaceholder" aria-hidden="true" />
                            )}
                          </div>
                          <div className="personaCard__title">{persona.title}</div>
                        </a>
                      ))}
                    </div>
                  </>
                ) : null}

                {project.caseStudy!.research.userFlowEmbedUrl && (
                  <>
                    <h3 className="caseStudySubheading">User Flow</h3>
                    <div className="project-detail__figma">
                      <iframe
                        src={project.caseStudy!.research.userFlowEmbedUrl}
                        title="User flow"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </>
                )}

              </div>
            </section>
          )}

          {project.caseStudy!.development?.subsections?.length ? (
            <section className="caseStudySection caseStudySection--full">
              <div className="caseStudySection__text">
                <h2>{project.caseStudy!.development.heading}</h2>
                <div className="developmentInsights">
                  {project.caseStudy!.development.subsections.map((subsection, index) => (
                    <div
                      key={subsection.heading}
                      className={`developmentSubsection ${index > 0 ? "developmentSubsection--withDivider" : ""}`}
                    >
                      <h3 className="caseStudySubheading">{subsection.heading}</h3>
                      <div className="developmentSubsection__insights">
                        {subsection.insights.map((insight, index) => (
                          <div
                            key={`${insight.image.src}-${index}`}
                            className={`caseStudySection ${index % 2 === 1 ? "caseStudySection--mediaFirst" : ""}`}
                          >
                            <div className="caseStudySection__text">
                              <p className="project-detail__desc">{insight.body}</p>
                            </div>
                            <div className="caseStudySection__media">
                              <button
                                type="button"
                                className="caseStudyImageButton"
                                onClick={() => setLightboxImage(insight.image)}
                                aria-label="View full size"
                              >
                                <img
                                  className="caseStudyImage"
                                  src={insight.image.src}
                                  alt={insight.image.alt}
                                  loading="lazy"
                                />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section className="caseStudySection caseStudySection--full">
            <div className="caseStudySection__text">
              <h2>Technical Architecture</h2>
              <p className="project-detail__desc">
                The project consists of three sub-repositories, each responsible for a distinct layer of the
                application.
              </p>
              <h4 className="caseStudySubheading">Frontend — React.js + TypeScript + Vite + SASS/SCSS</h4>
              <pre className="codeBlock">
                <code>{`frontend/src/
├── assets/                   # Assets for UI
├── components/               # Reusable components
├── contexts/                 # NotificationContext and other app-wide context
├── hooks/                    # Custom React hooks
├── lib/                      # API connections and client utilities
├── mounting/                 # Entry mounts for pages
├── pages/                    # Route-level pages
├── styles/                   # SCSS styling
├── types/                    # All TypeScript type definitions
└── utils/                    # Language, community, color utilities`}</code>
              </pre>

              <h4 className="caseStudySubheading">Backend — Hono + TypeScript + MySQL + Prisma ORM</h4>
              <pre className="codeBlock">
                <code>{`backend/
├── prisma/                   # Database schema and migrations
├── scripts/                  # Database migration scripts
└── src/                      # All source code
    ├── controllers/          # Shared controllers
    ├── interfaces/           # TypeScript interfaces
    ├── lib/                  # Backend connections and helpers
    ├── middleware/           # Auth, cache, user-context middleware
    ├── routes/               # Shared routes
    ├── seeds/                # Database seeding
    ├── services/             # Notification, user, and domain logic
    └── workers/              # Background workers (e.g. documentWorker.ts)`}</code>
              </pre>

              <h4 className="caseStudySubheading">Terms/Questions</h4>
              <pre className="codeBlock">
                <code>{`jargon-terms/
├── carpenter/                # Carpenter terms and questions seed files
├── electrician/              # Electrician terms and questions seed files
├── general/                  # General terms and questions seed files
├── mechanic/                 # Mechanic terms and questions seed files
├── plumber/                  # Plumber terms and questions seed files
└── welder/                   # Welder terms and questions seed files`}</code>
              </pre>
            </div>
          </section>

          <section className="caseStudySection caseStudySection--full">
            <div className="caseStudySection__text">
              <h2>File Naming & Conventions</h2>

              <h3 className="caseStudySubheading">Frontend (React app)</h3>
              <table className="namingTable">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Convention</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>React pages</td>
                    <td>PascalCase, grouped by feature</td>
                    <td>ProfilePage.tsx, LearnJargon.tsx</td>
                  </tr>
                  <tr>
                    <td>Drawer pages</td>
                    <td>PascalCase + <code>Drawer</code> suffix</td>
                    <td>CategorySelectDrawer.tsx</td>
                  </tr>
                  <tr>
                    <td>Shared components</td>
                    <td>PascalCase</td>
                    <td>StartLearningCard.tsx</td>
                  </tr>
                  <tr>
                    <td>Hooks</td>
                    <td>camelCase with <code>use</code> prefix</td>
                    <td>useSmartNavigation.ts</td>
                  </tr>
                  <tr>
                    <td>Type definitions</td>
                    <td>camelCase files in <code>types/</code></td>
                    <td>podium.ts, profile.ts</td>
                  </tr>
                  <tr>
                    <td>SCSS partials</td>
                    <td><code>_</code> + kebab-case</td>
                    <td>_profile.scss</td>
                  </tr>
                  <tr>
                    <td>CSS classes</td>
                    <td>kebab-case, BEM-ish blocks</td>
                    <td>profile-page</td>
                  </tr>
                  <tr>
                    <td>Assets</td>
                    <td>kebab-case paths and filenames</td>
                    <td>learning-folders/friends.svg</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="caseStudySubheading">Backend (Hono API)</h3>
              <table className="namingTable">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Convention</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Controllers</td>
                    <td>camelCase + <code>Controller</code> suffix</td>
                    <td>questionController.ts</td>
                  </tr>
                  <tr>
                    <td>Services</td>
                    <td>camelCase + <code>Service</code> suffix</td>
                    <td>userService.ts</td>
                  </tr>
                  <tr>
                    <td>Routes</td>
                    <td>camelCase + <code>Route</code> suffix (or plural)</td>
                    <td>friendshipRoute.ts, users.ts</td>
                  </tr>
                  <tr>
                    <td>Middleware</td>
                    <td>camelCase + <code>Middleware</code> suffix</td>
                    <td>authMiddleware.ts</td>
                  </tr>
                  <tr>
                    <td>Interfaces</td>
                    <td>camelCase files in <code>interfaces/</code></td>
                    <td>badgeData.ts</td>
                  </tr>
                  <tr>
                    <td>Seed scripts</td>
                    <td>camelCase verb + Seeder / action</td>
                    <td>runPrebuiltSeeder.ts</td>
                  </tr>
                  <tr>
                    <td>Workers</td>
                    <td>camelCase + Worker suffix</td>
                    <td>documentWorker.ts</td>
                  </tr>
                  <tr>
                    <td>Entry files</td>
                    <td>lowercase or camelCase</td>
                    <td>app.ts</td>
                  </tr>
                </tbody>
              </table>

              {/* <h3 className="caseStudySubheading">Database (Prisma schema)</h3>
              <table className="namingTable">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Convention</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Prisma models</td>
                    <td>PascalCase, singular</td>
                    <td>Category, Industry</td>
                  </tr>
                  <tr>
                    <td>DB tables</td>
                    <td>snake_case, plural via <code>@@map</code></td>
                    <td>categories, industries</td>
                  </tr>
                  <tr>
                    <td>Foreign keys</td>
                    <td>camelCase in Prisma, mapped to snake_case</td>
                    <td>userId → user_id</td>
                  </tr>
                  <tr>
                    <td>Booleans</td>
                    <td>camelCase with boolean verbs</td>
                    <td>isDefault, allowAIHelp</td>
                  </tr>
                  <tr>
                    <td>Join tables</td>
                    <td>snake_case plural via <code>@@map</code></td>
                    <td>user_badges</td>
                  </tr>
                  <tr>
                    <td>Enums</td>
                    <td>PascalCase name, SCREAMING_SNAKE_CASE values</td>
                    <td>
                      <code>QuizType {'{'} TERM_TO_TRANSLATION, BOSS_QUIZ {'}'}</code>
                    </td>
                  </tr>
                </tbody>
              </table> */}

              {/* <h3 className="caseStudySubheading">Domain terms (Jargon vocabulary)</h3>
              <table className="namingTable">
                <thead>
                  <tr>
                    <th>Concept type</th>
                    <th>Convention / guideline</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Core learning units</td>
                    <td>PascalCase entities, learning-focused</td>
                    <td>Flashcard, Question</td>
                  </tr>
                  <tr>
                    <td>User progress</td>
                    <td>PascalCase models describing progress</td>
                    <td>UserApprenticeshipProgress</td>
                  </tr>
                  <tr>
                    <td>Social layer</td>
                    <td>PascalCase models + matching controllers</td>
                    <td>Follow, UserBadge</td>
                  </tr>
                  <tr>
                    <td>Documents</td>
                    <td>Consistent <code>Document</code>-prefixed types</td>
                    <td>Document, DocumentTranslation</td>
                  </tr>
                  <tr>
                    <td>Avatar system</td>
                    <td>UserAvatar model + avatar* controllers/components</td>
                    <td>UserAvatar, avatarController.ts, Avatar.tsx</td>
                  </tr>
                  <tr>
                    <td>Notifications</td>
                    <td>Notification model + NotificationType enum</td>
                    <td>
                      <code>NotificationType {'{'} DOCUMENT_READY, FRIEND_REQUEST, QUIZ_SHARED {'}'}</code>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </section>

          {project.caseStudy!.marketingPromotion && (
            <section className="caseStudySection caseStudySection--full">
              <div className="caseStudySection__text">
                <h2>{project.caseStudy!.marketingPromotion.heading}</h2>
                {project.caseStudy!.marketingPromotion.body.map((p) => (
                  <p key={p} className="project-detail__desc">
                    {p}
                  </p>
                ))}
                {project.caseStudy!.marketingPromotion.videoEmbedUrl && (
                  <div className="project-detail__video project-detail__video--large">
                    <iframe
                      src={project.caseStudy!.marketingPromotion.videoEmbedUrl}
                      title={project.caseStudy!.marketingPromotion.videoTitle ?? "Pitch and presentation"}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                )}

                {project.caseStudy!.marketingPromotion.booth &&
                  project.caseStudy!.marketingPromotion.booth.images.length > 0 && (
                    <>
                      {project.caseStudy!.marketingPromotion.booth.body.map((p) => (
                        <div className="booth-text">
                          <p key={p} className="project-detail__desc">
                            {p}
                          </p>
                        </div>
                      ))}
                      <div className="booth-gallery">
                        <div className="booth-gallery__main-wrap">
                          <button
                            type="button"
                            className="booth-gallery__prev"
                            onClick={() =>
                              setBoothGalleryIndex(
                                (i) =>
                                  (i - 1 + project.caseStudy!.marketingPromotion!.booth!.images.length) %
                                  project.caseStudy!.marketingPromotion!.booth!.images.length
                              )
                            }
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={28} />
                          </button>
                          <div className="booth-gallery__main">
                            <img
                              src={
                                project.caseStudy!.marketingPromotion!.booth!.images[boothGalleryIndex]
                                  .src
                              }
                              alt={
                                project.caseStudy!.marketingPromotion!.booth!.images[boothGalleryIndex]
                                  .alt
                              }
                              loading="lazy"
                            />
                          </div>
                          <button
                            type="button"
                            className="booth-gallery__next"
                            onClick={() =>
                              setBoothGalleryIndex(
                                (i) =>
                                  (i + 1) %
                                  project.caseStudy!.marketingPromotion!.booth!.images.length
                              )
                            }
                            aria-label="Next image"
                          >
                            <ChevronRight size={28} />
                          </button>
                        </div>
                        <div className="booth-gallery__thumbs">
                          {project.caseStudy!.marketingPromotion!.booth!.images.map((img, idx) => (
                            <button
                              key={img.src}
                              type="button"
                              className={`booth-gallery__thumb-btn ${
                                idx === boothGalleryIndex ? "booth-gallery__thumb-btn--active" : ""
                              }`}
                              onClick={() => setBoothGalleryIndex(idx)}
                            >
                              <img src={img.src} alt={img.alt} loading="lazy" />
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
              </div>
            </section>
          )}

          {project.caseStudy!.reflection && (
            <section className="caseStudySection caseStudySection--full">
              <div className="caseStudySection__text">
                <h2>{project.caseStudy!.reflection.heading}</h2>
                {project.caseStudy!.reflection.body.map((p) => (
                  <p key={p} className="project-detail__desc">
                    {p}
                  </p>
                ))}
              </div>
            </section>
          )}

          {lightboxImage && (
            <div
              className="project-gallery__modal"
              role="dialog"
              aria-modal="true"
              aria-label="Image viewer"
              onClick={closeLightbox}
            >
              <button
                type="button"
                className="project-gallery__modal-close"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <div
                className="project-gallery__modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.alt}
                  className="project-gallery__modal-img"
                />
              </div>
            </div>
          )}
        </div>
      ) : (
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

            {project.demoAccess ? (
              <section className="project-detail__demo-access" aria-labelledby="demo-access-heading">
                <h2 id="demo-access-heading">{project.demoAccess.heading}</h2>
                {project.demoAccess.note && <p className="project-detail__desc">{project.demoAccess.note}</p>}

                <dl className="project-detail__demo-access-list">
                  <div className="project-detail__demo-access-item">
                    <dt>Client email</dt>
                    <dd>{project.demoAccess.clientEmail ?? "Client email here"}</dd>
                  </div>
                  <div className="project-detail__demo-access-item">
                    <dt>Admin email</dt>
                    <dd>{project.demoAccess.adminEmail ?? "Admin email here"}</dd>
                  </div>
                  <div className="project-detail__demo-access-item">
                    <dt>Password</dt>
                    <dd>{project.demoAccess.password ?? "Password here"}</dd>
                  </div>
                </dl>
              </section>
            ) : null}

            <h2>Overview</h2>
            {Array.isArray(project.description) ? (
              project.description.map((p) => (
                <p key={p} className="project-detail__desc">
                  {p}
                </p>
              ))
            ) : (
              <p className="project-detail__desc">{project.description}</p>
            )}

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
      )}
    </Container>
  );
}
