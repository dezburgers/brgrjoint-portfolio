import { Html, Head, Main, NextScript } from "next/document";
import linkbanner from "public/link-banner.png"

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Taking Creativity To The Next" />
        <meta property="og:title" content="Creativity Done Right | BRGR JOINT Productions" />
        <meta property="og:description" content="Taking Creativity To The Next" />
        <meta property="og:image" content={linkbanner} />
        <meta property="og:url" content="www.productions.brgrjoint.org" /> {/* Replace with the actual URL */}

      </Head>
      <body className="font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
