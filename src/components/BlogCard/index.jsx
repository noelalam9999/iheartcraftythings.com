import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
function BlogCard({ blogPost }) {
  return (
    <Link className={styles.a} href={`/coloring-page/${blogPost.id}`}>
      <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={blogPost.image}></img>
        <div className={styles.blogName}>{blogPost.title}</div>
      </div>
    </Link>
  );
}

export default BlogCard;
