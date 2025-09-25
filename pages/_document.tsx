// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const site = "https://futuro.ngo"; // update if your primary domain changes
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
        {/* <link rel="manifest" href="/site.webmanifest" />  // optional PWA */}

        {/* Basic SEO */}
        <meta name="description" content={desc} />
        <meta name="theme-color" content="#011E41" />
        <link rel="canonical" href={site} />

        {/* Open Graph (GLOBAL DEFAULTS) */}
        <meta property="og:type" content="website" />
        <
