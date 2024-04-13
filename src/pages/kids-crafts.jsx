import React from "react";
import blogs from "@/data/bloglist.json";
import BlogList from "../components/BlogsList";
import Head from "next/head";
function KidsCrafts() {
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

        <BlogList blogs={blogs} />
      </div>
    </>
  );
}

export default KidsCrafts;
