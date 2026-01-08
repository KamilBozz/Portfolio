import { GitHubCalendar } from "react-github-calendar";

type Props = {
  username: string;
  heading?: string;
};

export function GitHubCalendarBlock({ username, heading = "GitHub Activity" }: Props) {
  return (
    <section className="github-block">
      <div className="github-block__top">
        <h2 className="github-block__title">{heading}</h2>
        <a
          className="github-block__link"
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          @{username}
        </a>
      </div>

      <div className="github-block__card">
        <GitHubCalendar username={username} />
      </div>
    </section>
  );
}
