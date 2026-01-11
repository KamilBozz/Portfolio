type Props = {
    title: string;
    description?: string;
    path?: string; // "/about"
  };
  
  const SITE_NAME = "Kamil Bozkurt";
  const BASE_URL = "https://YOUR_DOMAIN_HERE"; // your Vercel domain
  const DEFAULT_DESC =
    "Full Stack Web Development graduated from BCIT. Projects with TypeScript, React, Node, and databases.";
  
  export function Seo({ title, description, path = "/" }: Props) {
    const fullTitle = `${title} • ${SITE_NAME}`;
    const desc = description ?? DEFAULT_DESC;
    const url = `${BASE_URL}${path}`;
    const ogImage = `${BASE_URL}/og/og-default.png`;
  
    return (
      <>
        <title>{fullTitle}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
  
        {/* OpenGraph */}
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
  
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={ogImage} />
      </>
    );
  }
  