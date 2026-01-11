export type ProjectLink = {
  label: "GitHub" | "Live" | "Case Study";
  url: string;
};

export type ProjectImage = {
  src: string; // from /public, e.g. "/projects/jargon/1.png"
  alt: string;
};

export type ProjectVideo = {
  provider: "youtube" | "vimeo" | "other";
  embedUrl: string; // full EMBED url
  title: string;
};

export type Project = {
  title: string;
  slug: string; // route: /projects/:slug

  tagline: string; // short for cards
  description: string; // longer for detail page

  tech: string[];
  highlights: string[];

  links: ProjectLink[];

  thumbnail: ProjectImage;
  gallery: ProjectImage[];

  video?: ProjectVideo; // optional
  timeframe?: string;
  role?: string;

  featured?: boolean;
};
