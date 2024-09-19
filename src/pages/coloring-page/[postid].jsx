import React, { useEffect } from "react";
import styles from "@/styles/coloring-page.module.css";
import usePost from "../../hooks/usePost";
import Image from "next/image";
import { useRouter } from "next/router";
import socialColor from "@/assets/socials-color.png";
import Head from "next/head";
import { Cloudinary } from "@cloudinary/url-gen";
import Drawing from "../../components/Drawing";
import { config } from "../../config";

function ColoringPage({ post }) {
  // const router = useRouter();
  // let post = {};
  // post = usePost(router.query?.postid);
  return (
    <>
      {/* {post.data ? (
        <> */}
      <Head>
        <title>{post?.details?.title}</title>
      </Head>
      <div className="content-wrapper">
        {/* <div className="current-page-post">
          <div className="from-label">Home</div>&nbsp; <span> {">"} </span>
          &nbsp;
          <div className={styles.currentPageLabel}>Coloring Pages</div>
          &nbsp; <span>{">"}</span>
          &nbsp;
          <div className="current-page-label text-bold">
            {post?.details.title}
          </div>
        </div> */}

        <div className={styles.coloringPage}>
          <h1 className={styles.title}>{post?.details?.title}</h1>
          <h2 className={styles.subTitle}>{post?.details?.hook}</h2>

          <div className={styles.blog}>
            {/* <div className={styles.shareIcons}>
                  <Image
                    className={styles.socialColor}
                    src={socialColor}
                    alt="social-color"
                  />
                </div> */}
            <div className={styles.content}>
              <p
                dangerouslySetInnerHTML={{
                  __html: post?.details?.introduction,
                }}
              ></p>

              <Drawing
                drawing={Array.isArray(post?.content) && post?.content[0]}
                folder={post?.details?.sheet}
              ></Drawing>

              {post?.content?.slice(1).map((drawing) => (
                <Drawing
                  key={drawing?.Number}
                  drawing={drawing}
                  folder={post?.details?.sheet}
                ></Drawing>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
    //   ) : (
    //     <>Loading</>
    //   )}
    // </>
  );
}

export async function getStaticPaths() {
  let posts = await fetch(`${config.backendLocal}/blogs`).then((res) =>
    res.json()
  );
  let paths = posts.result.map((post) => ({
    params: { postid: post.id },
  }));

  // We'll prerender only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let post = await fetch(`${config.backendLocal}/blog/${params.postid}`).then(
    (res) => res.json()
  );

  return {
    props: { post },
    // Next.js will invalidate the cache when a
    // request comes in, at most once every 60 seconds.
    revalidate: 60,
  };
}

export default ColoringPage;
