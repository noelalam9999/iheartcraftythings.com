import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import {
  uploadImageURLsToSheets,
  cloudinaryUpload,
} from "../../services/uploadImages";
import useSheets from "../../hooks/useSheets";

function UploadImages() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");
  const [showSuccessModal, setSuccessShowModal] = useState(false);
  const sheetNameRef = useRef();
  const { isLoading, data } = useSheets();
  const [successfulUploads, setSuccessfulUploads] = useState([]);
  const [failedUploads, setFailedUploads] = useState([]);
  const [fileUploadLoading, setFileUploadLoading] = useState(false);

  const fileSelected = (event) => {
    setSuccessShowModal(false);
    setSuccessfulUploads([]);
    setError("");
    setFiles(event.target.files);
  };

  useEffect(() => {
    if (
      files.length !== 0 &&
      successfulUploads.length + failedUploads.length === files.length
    ) {
      const sheetName = sheetNameRef.current.value;
      uploadImageURLsToSheets(
        successfulUploads,
        sheetName,
        data.data.result // sheets array for inserting into featured image
      ).then((res) => {
        setSuccessShowModal(true);
      });
    }
  }, [successfulUploads, failedUploads]);

  const submitImages = async (event) => {
    event.preventDefault();

    const sheetName = sheetNameRef.current.value;
    if (files.length > 0 && sheetName != "Choose sheet") {
      setFileUploadLoading(true);
      setError("");
      try {
        await cloudinaryUpload(
          files,
          sheetName,
          setSuccessfulUploads,
          setFailedUploads
        );
        setFileUploadLoading(false);
        setError("");
      } catch (error) {
        console.log(error);
      }
    } else {
      if (files.length <= 0) {
        setError("Choose files");
      } else {
        setError("Set Sheetname");
      }
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.formContainer}>
        <form className={styles.uploadForm} onSubmit={submitImages}>
          <input
            type="file"
            id="img"
            name="img"
            multiple
            style={{ visibility: "hidden" }}
            onChange={fileSelected}
          />
          <label className={styles.imageInput} htmlFor="img"></label>

          {error === "Choose files" && <p className={styles.error}>{error}</p>}

          <select className={styles.selectTag} name="sheet" ref={sheetNameRef}>
            <option key={-1}>
              {isLoading ? "Loading sheets" : "Choose sheet"}
            </option>
            {data?.data.result.map((item, index) => (
              <option key={index} value={item.sheet}>
                {item.sheet}
              </option>
            ))}
          </select>

          {error === "Set Sheetname" && <p className={styles.error}>{error}</p>}

          <input
            type="submit"
            className={styles.uploadButton}
            value={`${fileUploadLoading ? "uploading" : "Upload Photos"}`}
            disabled={fileUploadLoading}
          />
          {showSuccessModal ? <p className={styles.success}>Uploaded!</p> : ""}
        </form>
      </div>

      <div className={styles.imageResults}>
        <div className={styles.preview}>
          <div className={styles.imageResultsHeader}>
            Preview : {files.length}
          </div>
          <div className={styles.imageList}>
            {files &&
              Object.values(files)
                .map((file) => URL.createObjectURL(file))
                ?.map((file) => (
                  <img
                    key={file}
                    src={file}
                    width={100}
                    height={100}
                    alt="img"
                  />
                ))}
          </div>
        </div>
        <div className={styles.successfulUploads}>
          <div className={styles.imageResultsHeader}>
            Successful Uploads : {successfulUploads.length}
          </div>
          <div className={styles.imageList}>
            {successfulUploads &&
              successfulUploads?.map((file) => (
                <img key={file} src={file} width={100} height={100} alt="img" />
              ))}
          </div>
        </div>

        <div className={styles.failedUploads}>
          <div className={styles.imageResultsHeader}>
            Failed Uploads : {failedUploads.length}
          </div>
          <div className={styles.imageList}>
            {failedUploads &&
              failedUploads?.map((file) => (
                <img key={file} src={file} width={100} height={100} alt="img" />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadImages;
