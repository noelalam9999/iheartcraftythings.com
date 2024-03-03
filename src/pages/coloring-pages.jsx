import React from "react";
import BlogList from "../components/BlogsList";
import blogs from "@/data/bloglist.json";
import Head from "next/head";

function ColoringPages() {
  return (
    <>
      <Head>
        <title>Coloring Pages</title>
      </Head>

      <div className="wrapper">
        <div className="current-page">
          <div className="from-label">Home</div>&nbsp; {">"}&nbsp;
          <div className="current-page-label">Coloring Pages</div>
        </div>
        <hr style={{ backgroundColor: "grey" }} className="hr" />
        <BlogList blogs={blogs} />
      </div>
    </>
  );
}

export default ColoringPages;
