import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

function BlogCard({ blogPost }) {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImage} src={blogPost.blogImage}></img>
      <div className={styles.blogName}>{blogPost.blogName}</div>
    </div>
  );
}

export default BlogCard;
