// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const site = "https://futuro.ngo";
  const title = "Futuro — Where Global Impact Takes Shape";
  const desc =
    "A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact.";

  return (
    <Html lang="en">
      <Head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Basic SEO */}
        <meta name="description" content={desc} />
        <meta name="theme-color" content="#011E41" />
        <link rel="canonical" href={site} />

        {/* Open Graph Defaults */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Futuro" />
        <meta property="og:url" content={site} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />

        {/* Square fallback (best for WhatsApp & iMessage) */}
        <meta property="og:image" content={`${site}/OG_Futuro_Square.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:alt" content="Futuro: Where Global Impact Takes Shape" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={`${site}/OG_Futuro_Square.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
