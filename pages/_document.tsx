// /pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Futuro — Where Global Impact Takes Shape</title>
        <meta
          name="description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:url" content="https://futuro.ngo/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Futuro — Where Global Impact Takes Shape"
        />
        <meta
          property="og:description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />

        {/* Wide (default) image */}
        <meta
          property="og:image"
          content="https://futuro.ngo/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Square fallback for WhatsApp / iMessage */}
        <meta
          property="og:image"
          content="https://futuro.ngo/og-image-square.png"
        />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />

        {/* HD fallback (Twitter/X) */}
        <meta
          property="og:image"
          content="https://futuro.ngo/og-image-hd.png"
        />
        <meta property="og:image:width" content="1600" />
        <meta property="og:image:height" content="900" />

        <meta
          property="og:image:alt"
          content="Futuro — Where Global Impact Takes Shape"
        />

        {/* Facebook App ID */}
        <meta property="fb:app_id" content="649863557855929" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourHandle" />
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
          content="https://futuro.ngo/og-image.png"
        />

        {/* Apple iMessage / iOS */}
        <meta name="apple-mobile-web-app-title" content="Futuro" />
        <meta name="format-detection" content="telephone=no" />

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
