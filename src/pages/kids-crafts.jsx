import React from "react";
import blogs from "@/data/bloglist.json";
import BlogList from "../components/BlogsList";
import Head from "next/head";
import { config } from "../config";
function KidsCrafts({ data }) {
  return (
    <>
      <Head>
        <title>Kids Crafts</title>
      </Head>

      <div className="wrapper">
        <div className="current-page">
          <div className="from-label">Home</div>&nbsp; {">"}&nbsp;
          <div className="current-page-label">Kids Crafts</div>
        </div>

        <BlogList blogs={blogs} data={data} />
      </div>
    </>
  );
}

export default KidsCrafts;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const { isLoading, data } = usePosts(1);
//   const res = await fetch(`${config.backendLocal}/blogs`);
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { data } };
// }

export async function getServerSideProps() {
  // Fetch data from external API
  // const { isLoading, data } = usePosts(1);
  const res = await fetch(`${config.backendLocal}/blogs`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
