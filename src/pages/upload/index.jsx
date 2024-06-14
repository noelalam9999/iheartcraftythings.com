import React from "react";
import styles from "../../styles/upload-page.module.css";
import UploadImages from "../../components/UploadImages";
import Head from "next/head";
function Upload() {
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
