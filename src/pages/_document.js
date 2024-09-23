import { Html, Head, Main, NextScript } from "next/document";
import AdSense from "../lib/index";

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
              // overflow-x: hidden; /* Prevent horizontal scroll */
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
        <meta
          name="description"
          content="Welcome to Kids N Kraft, your ultimate destination for high-quality,
        free printables designed to inspire creativity and joy in children of
        all ages. Since our launch in 2023, we've become a trusted resource
        for teachers, parents, and children across the globe, offering an
        extensive collection of over 10,000 free coloring pages and educational
        printables."
        />
      </Head>

      <body style={{ margin: 0 }}>
        <Main />
        <NextScript />
        <AdSense.Google client="ca-pub-9536247329744817" slot="7806394673" />
        <script
          async
          src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9536247329744817"
          crossorigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
