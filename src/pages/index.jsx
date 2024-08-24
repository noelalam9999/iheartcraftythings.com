import Head from "next/head";
import { Inter } from "next/font/google";
import BlogList from "@/components/BlogsList";
import blogs from "@/data/bloglist.json";

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

export async function getServerSideProps() {
  // Fetch data from external API
  // const { isLoading, data } = usePosts(1);
  const res = await fetch(`${config.backendLocal}/blogs`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
