import React, { useEffect } from "react";
import styles from "@/styles/coloring-page.module.css";
import usePost from "../../hooks/usePost";
import Image from "next/image";
import { useRouter } from "next/router";
import socialColor from "@/assets/socials-color.png";
import Head from "next/head";
import { Cloudinary } from "@cloudinary/url-gen";
import Drawing from "../../components/Drawing";

function ColoringPage() {
  const router = useRouter();
  let post = {};
  post = usePost(router.query?.postid);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dsuiwxwkg",
    },
  });

  return (
    <>
      {post.data ? (
        <>
          <Head>
            <title>{post?.data.data.details.title}</title>
          </Head>
          <div className="content-wrapper">
            <div className="current-page-post">
              <div className="from-label">Home</div>&nbsp; <span> {">"} </span>
              &nbsp;
              <div className="current-page-label">
                Coloring Pages
              </div>&nbsp; <span>{">"}</span>
              &nbsp;
              <div className="current-page-label text-bold">
                {post?.data.data.details.title}
              </div>
            </div>

            <div className={styles.coloringPage}>
              <h1 className={styles.title}>{post?.data.data.details.title}</h1>
              <h2 className={styles.subTitle}>
                {post?.data?.data?.details.hook}
              </h2>

              <div className={styles.blog}>
                <div className={styles.shareIcons}>
                  <Image
                    className={styles.socialColor}
                    src={socialColor}
                    alt="social-color"
                  />
                </div>
                <div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post?.data?.data?.details.introduction,
                    }}
                  ></p>

                  <Drawing
                    drawing={post?.data?.data?.content[0]}
                    folder={post?.data.data.details.sheet}
                  ></Drawing>

                  {post?.data?.data?.content.slice(1).map((drawing) => (
                    <Drawing
                      key={drawing.Number}
                      drawing={drawing}
                      folder={post?.data.data.details.sheet}
                    ></Drawing>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default ColoringPage;
