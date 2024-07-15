import React from "react";
import styles from "./style.module.css";
import { AdvancedImage } from "@cloudinary/react";
import ReactToPrint from "react-to-print";
import { saveAs } from "file-saver";
import Image from "next/image";

function Drawing({ drawing, folder }) {
  const componentRef = React.useRef(null);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    return <button className={styles.ctaButton}>Print PDF</button>;
  }, []);

  return (
    <div className={styles.drawing}>
      <h2>{drawing.Title}</h2>
      <figure>
        <figcaption>{drawing.Description}</figcaption>
        <img
          className="image-to-print"
          ref={componentRef}
          src={drawing.ImageURL}
        />
      </figure>

      <div className={styles.ctaButtons}>
        <ReactToPrint
          content={reactToPrintContent}
          documentTitle="AwesomeFileName"
          // onAfterPrint={handleAfterPrint}
          // onBeforeGetContent={handleOnBeforeGetContent}
          // onBeforePrint={handleBeforePrint}
          removeAfterPrint={false}
          trigger={reactToPrintTrigger}
        />

        <button
          className={styles.ctaButton}
          download
          onClick={() => {
            saveAs(drawing.ImageURL, drawing.ImageFilename); // Put your image URL here.
          }}
        >
          Download
        </button>
        <a
          className={styles.ctaButton}
          href={`https://pinterest.com/pin/create/button/?url=https://kidsnkraft.com&media=${drawing.ImageURL}&title=${drawing.Title}&description=${drawing.Description}&method=button`}
        >
          Pinterest
        </a>
      </div>
    </div>
  );
}

export default Drawing;
