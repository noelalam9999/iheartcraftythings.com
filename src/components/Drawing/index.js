import React from "react";
import styles from "./style.module.css";
import { AdvancedImage } from "@cloudinary/react";
import ReactToPrint from "react-to-print";
import { saveAs } from "file-saver";

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
          src={`https://res.cloudinary.com/dsuiwxwkg/image/upload/v1/${folder}/${drawing.ImageFilename}`}
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
            saveAs(
              `https://res.cloudinary.com/dsuiwxwkg/image/upload/v1/${folder}/${drawing.ImageFilename}`,
              drawing.ImageFilename
            ); // Put your image URL here.
          }}
        >
          Download
        </button>
        <a
          className={styles.ctaButton}
          href={`https://pinterest.com/pin/create/button/?url=https://momlovesbest.com/dragon-coloring-pages&media=https://res.cloudinary.com/dsuiwxwkg/image/upload/v1/${folder}/${drawing.ImageFilename}&title=${drawing.Title}&description=${drawing.Description}&method=button`}
        >
          Pinterest
        </a>
      </div>
    </div>
  );
}

export default Drawing;
