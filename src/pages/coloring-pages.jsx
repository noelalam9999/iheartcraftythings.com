import React from "react";
import BlogList from "../components/BlogsList";
import blogs from "@/data/bloglist.json";

function ColoringPages() {
  return (
    <div>
      <div className="current-page">
        <div>Home</div>
        {">"}
        <div>Coloring Pages</div>
      </div>
      <hr />
      <BlogList blogs={blogs} />
    </div>
  );
}

export default ColoringPages;
