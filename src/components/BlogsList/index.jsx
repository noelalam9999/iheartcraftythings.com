import React, { useEffect, useRef } from "react";
import BlogCard from "../BlogCard";
import styles from "./style.module.css";
import usePosts from "@/hooks/usePosts/index.js";
import useBlogListDistance from "../../hooks/BlogListDistance";

function BlogList() {
  const blogRef = useRef();
  const { isLoading, data } = usePosts(1);

  const { setBlogListDistance } = useBlogListDistance();
  function handleScroll() {
    const top = blogRef?.current?.getBoundingClientRect();
    setBlogListDistance(top?.top);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      if (blogRef.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  return isLoading ? (
    <>Loading</>
  ) : (
    <div ref={blogRef} className={styles.blogList}>
      {data?.data?.result?.map((blogPost) => {
        return <BlogCard key={blogPost.id} blogPost={blogPost} />;
      })}
    </div>
  );
}

export default BlogList;
