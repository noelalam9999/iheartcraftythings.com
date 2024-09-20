import Head from "next/head";
import { Inter } from "next/font/google";
import BlogList from "@/components/BlogsList";
import blogs from "@/data/bloglist.json";
import { config } from "../config";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Kids and Kraft</title>
      </Head>

      <BlogList blogs={blogs} data={data} />
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  // Fetch data from external API
  // const { isLoading, data } = usePosts(1);
  const response = await fetch(`${config.backendLocal}/blogs`);
  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );
  const data = await response.json();
  // Pass data to the page via props
  return { props: { data } };
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${config.backendLocal}/blogs`);
//   const data = await res.json();
//   return {
//     props: { data },
//     revalidate: 10, // re-generate HTML file every 10 seconds
//   };
// };
