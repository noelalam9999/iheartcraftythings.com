import React from "react";
import BlogList from "../components/BlogsList";
import blogs from "@/data/bloglist.json";
import Head from "next/head";
import usePosts from "@/hooks/usePosts/index.js";
import { getPosts } from "@/services/getPosts/index.js";
import { config } from "../config";
function ColoringPages({ data }) {
  return (
    <>
      <Head>
        <title>Coloring Pages</title>
      </Head>

      <div className="wrapper">
        <div className="current-page">
          <div className="from-label">Home</div>&nbsp; {">"}&nbsp;
          <div className="current-page-label text-bold">Coloring Pages</div>
        </div>

        <BlogList blogs={blogs} data={data} />
      </div>
    </>
  );
}

export default ColoringPages;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const { isLoading, data } = usePosts(1);
//   const res = await fetch(`${config.backendLocal}/blogs`);
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { data } };
// }

export const getStaticProps = async () => {
  const res = await fetch(`${config.backendLocal}/blogs`);
  const data = await res.json();
  return {
    props: { data },
    revalidate: 60 * 60 * 24, // re-generate HTML file every 10 seconds
  };
};
