import { Container } from "../../components/layout/Container/Container";

const CAL_LINK = "https://cal.com/kamil-bozkurt"; // replace with your real link

export function BookPage() {
  return (
    <Container>
      <h1>Book a Meeting</h1>

      <p className="book-page__lead">
        Choose a day and time that works for you. After you book, I’ll receive your details and
        email you a meeting link.
      </p>

      <div className="book-page__embed">
        <iframe
          src={CAL_LINK}
          title="Book a meeting"
          className="book-page__iframe"
          loading="lazy"
        />
      </div>

      <p className="book-page__note">
        Tip: If you don’t see available times, try a different week or send me a message from the{" "}
        <a href="/contact">Contact</a> page.
      </p>
    </Container>
  );
}
