export type ProjectLink = {
  label: "GitHub" | "Live App" | "Case Study" | "Instagram" | "Website";
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

export type ProjectCaseStudy = {
  overviewShort: string;
  heroImage: ProjectImage;
  problem: {
    heading: string;
    body: string[];
    image: ProjectImage;
  };
  myRole?: {
    heading: string;
    body: string[];
  };
  keyFeatures?: {
    heading: string;
    items: {
      title: string;
      description: string;
    }[];
    image: ProjectImage;
  };
  design?: {
    heading: string;
    body: string[];
    screensImage?: ProjectImage;
  };
  research?: {
    heading: string;
    body: string[];
    personas?: {
      title: string;
      pdfUrl: string;
      thumbnail?: ProjectImage;
    }[];
    // Figma embed URL for user flow. Only shown when set.
    userFlowEmbedUrl?: string;
  };
  // Figma embed URL (Share → Embed in Figma). Only shown when set.
  figmaEmbedUrl?: string;
  marketingPromotion?: {
    heading: string;
    body: string[];
    /** YouTube/Vimeo embed URL for pitch or event video. Only shown when set. */
    videoEmbedUrl?: string;
    videoTitle?: string;
    booth?: {
      body: string[];
      images: ProjectImage[];
    };
  };
  /** What I learned / reflection. Text only. */
  reflection?: {
    heading: string;
    body: string[];
  };
};

export type Project = {
  title: string;
  slug: string; // route: /projects/:slug

  tagline: string; // short for cards
  description: string | string[]; // longer for detail page (supports multi-paragraph)

  tech: string[];
  highlights: string[];

  links: ProjectLink[];

  thumbnail: ProjectImage;
  gallery: ProjectImage[];

  video?: ProjectVideo; // optional
  timeframe?: string;
  role?: string;

  caseStudy?: ProjectCaseStudy; // optional (used for /projects/jargon case study layout)
  featured?: boolean;
};
