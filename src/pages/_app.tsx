// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }


import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {NextUIProvider} from '@nextui-org/react'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A brief description of your website for SEO purposes." />
        <meta name="keywords" content="Next.js, React, SEO, your, keywords" />
        <meta name="author" content="Your Name" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Your Website Title" />
        <meta property="og:description" content="A brief description of your website for social media sharing." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Title" />
        <meta name="twitter:description" content="A brief description of your website for Twitter sharing." />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
        <meta name="twitter:url" content="https://yourwebsite.com" />
        <title>Lily Massage Bangkok </title>
      </Head>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
