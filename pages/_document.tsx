import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic SEO */}
        <title>Futuro — Where Global Impact Takes Shape</title>
        <meta
          name="description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />

        {/* Open Graph (Facebook, LinkedIn, iMessage) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futuro.ngo/" />
        <meta property="og:title" content="Futuro — Where Global Impact Takes Shape" />
        <meta
          property="og:description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />
        <meta property="og:image" content="https://futuro.ngo/OG_Futuro.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Square fallback for WhatsApp/iMessage */}
        <meta property="og:image:alt" content="https://futuro.ngo/OG_Futuro_Square.png" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Futuro — Where Global Impact Takes Shape" />
        <meta
          name="twitter:description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />
        <meta name="twitter:image" content="https://futuro.ngo/OG_Futuro.png" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
