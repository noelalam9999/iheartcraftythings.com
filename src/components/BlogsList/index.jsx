import React from "react";
import BlogCard from "../BlogCard";
import styles from "./style.module.css";
import usePosts from "@/hooks/usePosts/index.js";

function BlogList() {
  const { isLoading, data } = usePosts(1);

  return isLoading ? (
    <>Loading</>
  ) : (
    <div className={styles.blogList}>
      {data?.data?.data?.map((blogPost) => {
        return <BlogCard key={blogPost.id} blogPost={blogPost} />;
      })}
    </div>
  );
}

export default BlogList;
