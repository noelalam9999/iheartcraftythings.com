import React, { useEffect } from "react";
import styles from "../../styles/upload-page.module.css";
import UploadImages from "../../components/UploadImages";
import Head from "next/head";
import { isAuthenticated } from "../../services/authentication/isAuthenticated";
import { useRouter } from "next/router";
function Upload() {
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      isAuthenticated(token).then((response) => {
        if (response.data.message !== "verified") {
          router.push("/login");
        }
      });
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Upload</title>
      </Head>
      <div className={styles.uploadPage}>
        <UploadImages />
      </div>
    </>
  );
}

export default Upload;
