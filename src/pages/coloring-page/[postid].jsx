import React, { useEffect } from "react";
import styles from "@/styles/coloring-page.module.css";
import usePost from "../../hooks/usePost";
import Image from "next/image";
import { useRouter } from "next/router";
import socialColor from "@/assets/socials-color.png";
import Head from "next/head";

function ColoringPage() {
  const router = useRouter();
  let post = {};
  if (router.query.postid) {
    post = usePost(router.query.postid);
  }

  return (
    <>
      <Head>
        <title>{post?.data?.data?.title}</title>
      </Head>
      <div className="current-page-post">
        <div className="from-label">Home</div>&nbsp; {">"}&nbsp;
        <div className="current-page-label">Coloring Pages</div>&nbsp; {">"}
        &nbsp;
        <div className="current-page-label text-bold">
          {post?.data?.data?.title}
        </div>
      </div>

      <div className={styles.coloringPage}>
        <h1 className={styles.title}>{post?.data?.data?.title}</h1>
        <h2 className={styles.subTitle}>{post?.data?.data?.subtitle}</h2>

        <div className={styles.blog}>
          <div className={styles.shareIcons}>
            <Image
              className={styles.socialColor}
              src={socialColor}
              alt="social-color"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post?.data?.data?.content }}
          />
        </div>
      </div>
    </>
  );
}

export default ColoringPage;
