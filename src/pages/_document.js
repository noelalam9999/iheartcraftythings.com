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

            
          ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
          }
          `}</style>
        <meta
          name="p:domain_verify"
          content="4ad86ee21673982db6d1591b42846096"
        />
      </Head>

      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
