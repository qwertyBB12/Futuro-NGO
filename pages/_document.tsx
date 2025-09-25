import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://futuro.ngo/" />
        <meta
          property="og:title"
          content="Futuro — Where Global Impact Takes Shape"
        />
        <meta
          property="og:description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />

        {/* Landscape OG (FB, LinkedIn, X/Twitter) */}
        <meta property="og:image" content="https://futuro.ngo/OG_Futuro.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Futuro — Global Impact visual identity"
        />

        {/* Square fallback (WhatsApp, iMessage) */}
        <meta
          property="og:image"
          content="https://futuro.ngo/OG_Futuro_Square.png"
        />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta
          property="og:image:alt"
          content="Futuro — Global Impact square identity"
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Futuro — Where Global Impact Takes Shape"
        />
        <meta
          name="twitter:description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />
        <meta
          name="twitter:image"
          content="https://futuro.ngo/OG_Futuro.png"
        />

        {/* Optional Facebook App ID (removes debugger warning, but safe to omit if no FB app) */}
        {/* <meta property="fb:app_id" content="YOUR_APP_ID_HERE" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
