import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
function BlogCard({ blogPost }) {
  return (
    <Link
      key={blogPost.id}
      className={styles.a}
      href={`/coloring-page/${blogPost.id}`}
    >
      <div className={styles.cardContainer}>
        <img className={styles.cardImage} src={blogPost.thumbnail}></img>
        <div className={styles.blogName}>
          <span>{blogPost.title}</span>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
