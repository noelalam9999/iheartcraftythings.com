import React from "react";
import BlogCard from "../BlogCard";
import blogPosts from "@/data/bloglist.json";
import styles from "./style.module.css";
function BlogList() {
  return (
    <div className={styles.blogList}>
      {blogPosts.map((blogPost) => {
        return <BlogCard key={blogPost.id} blogPost={blogPost} />;
      })}
    </div>
  );
}

export default BlogList;
