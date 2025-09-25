import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Futuro — Where Global Impact Takes Shape</title>
        <meta
          name="description"
          content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact."
        />

        {/* Open Graph */}
        <meta property="og:url" content="https://futuro.ngo/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Futuro — Where Global Impact Takes Shape" />
        <meta property="og:description" content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact." />
        <meta property="og:image" content="https://futuro.ngo/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Futuro — Where Global Impact Takes Shape" />
        <meta property="fb:app_id" content="649863557855929" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Futuro — Where Global Impact Takes Shape" />
        <meta name="twitter:description" content="A platform uniting leaders, institutions, and projects across the Americas to design, fund, and scale social impact." />
        <meta name="twitter:image" content="https://futuro.ngo/og-image.png" />

        {/* Apple */}
        <meta name="apple-mobile-web-app-title" content="Futuro" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
