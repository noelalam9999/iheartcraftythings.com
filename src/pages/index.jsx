import Head from "next/head";
import { Inter } from "next/font/google";
import BlogList from "@/components/BlogsList";
import blogs from "@/data/bloglist.json";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>I Heart Crafty Things</title>
      </Head>

      <BlogList blogs={blogs} />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
