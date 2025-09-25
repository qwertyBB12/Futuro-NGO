// /pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head"; // ✅ Fix: import Head
import "@/styles/globals.css"; // adjust if you have global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
        <meta
          property="og:image"
          content="https://futuro.ngo/OG_Futuro.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Futuro — Where Global Impact Takes Shape"
        />
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
          content="https://futuro.ngo/OG_Futuro.png"
        />

        {/* Apple iMessage / iOS */}
        <meta
          name="apple-mobile-web-app-title"
          content="Futuro"
        />
        <meta
          name="format-detection"
          content="telephone=no"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
