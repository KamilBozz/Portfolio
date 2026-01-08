import { Container } from "../../components/layout/Container/Container";
import { social } from "../../data/social";
import { useForm, ValidationError } from "@formspree/react";

const FOMSPREE_ID = "xyzyjgno";

export function ContactPage() {

  const [state, handleSubmit] = useForm(FOMSPREE_ID);

  return (
    <Container>
      <h1>Contact</h1>

      <p className="contact-page__lead">
        Want to connect? Email me or message me on LinkedIn. If you want to meet, please use the{" "}
        <a href="/book">Book a Meeting</a> page.
      </p>

      <div className="contact-page__grid">
        <a className="contact-card" href={`mailto:${social.email}`}>
          <div className="contact-card__title">Email</div>
          <div className="contact-card__value">{social.email}</div>
          <div className="contact-card__hint">Click to open your email app</div>
        </a>

        <a className="contact-card" href={social.linkedin} target="_blank" rel="noreferrer">
          <div className="contact-card__title">LinkedIn</div>
          <div className="contact-card__value">View profile</div>
          <div className="contact-card__hint">Best for professional messages</div>
        </a>

        <a className="contact-card" href={social.github} target="_blank" rel="noreferrer">
          <div className="contact-card__title">GitHub</div>
          <div className="contact-card__value">View profile</div>
          <div className="contact-card__hint">See my code and contributions</div>
        </a>
      </div>

      <section className="contact-page__section">
        <h2>Send a message</h2>
        <p className="contact-page__muted">
          This form sends directly to my inbox. Please include your email so I can reply.
        </p>

        {state.succeeded ? (
          <div className="contact-success">
            <h3 className="contact-success__title">Message sent ✅</h3>
            <p className="contact-success__text">
              Thanks for reaching out. I’ll reply as soon as I can.
            </p>
            <a className="contact-success__button" href="/book">
              Prefer to book a meeting?
            </a>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <label className="contact-form__label">
                Your name
                <input className="contact-form__input" type="text" name="name" required />
              </label>

              <label className="contact-form__label">
                Your email
                <input className="contact-form__input" type="email" name="email" required />
              </label>
            </div>

            <label className="contact-form__label">
              Message
              <textarea className="contact-form__textarea" name="message" rows={6} required />
            </label>

            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button className="contact-form__button" type="submit" disabled={state.submitting}>
              {state.submitting ? "Sending..." : "Send"}
            </button>
          </form>
        )}

        <p className="contact-page__muted contact-page__small">
          Prefer not to use the form? Email me directly:{" "}
          <a href={`mailto:${social.email}`}>{social.email}</a>
        </p>
      </section>
    </Container>
  );
}
