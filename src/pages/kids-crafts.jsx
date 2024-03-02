import React from "react";
import blogs from "@/data/bloglist.json";
import BlogList from "../components/BlogsList";
function KidsCrafts() {
  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
}

export default KidsCrafts;
