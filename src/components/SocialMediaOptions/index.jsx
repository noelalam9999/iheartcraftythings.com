import React from "react";
import { useAppSelector } from "../../app/hooks";
import styles from "./style.module.css";
import facebookIcon from "@/assets/facebook-black.png";
import pinterestIcon from "@/assets/pinterest-black.png";
import Image from "next/image";
function SocialMediaOptions() {
  const display = useAppSelector(
    (state) => state.socialMediaOptionsDisplay.display
  );

  return (
    display && (
      <div className={styles.socialMediaOptionsBox}>
        <div className={styles.socialMediaIcon}>
          <Image
            className={styles.pinterest}
            src={facebookIcon}
            alt="facebook"
          ></Image>
          <Image
            className={styles.pinterest}
            src={pinterestIcon}
            alt="pinterest"
          ></Image>
        </div>
      </div>
    )
  );
}

export default SocialMediaOptions;
