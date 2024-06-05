import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
            html, body {
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
              overflow-x: hidden; /* Prevent horizontal scroll */
            }
            * {
              box-sizing: border-box;
            }
          `}</style>
      </Head>

      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
