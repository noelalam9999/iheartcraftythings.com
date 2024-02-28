import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeDisplayState } from "@/features/collapsableMenu/collapsable-menu-slice";
import facebookIcon from "@/assets/facebook.png";
import pinterestIcon from "@/assets/pinterest.png";
import closeIcon from "@/assets/close.png";
import Link from "next/link";

function CollapsableMenu() {
  const display = useAppSelector((state) => state.menuDisplay.display);
  const dispatch = useAppDispatch();
  function onCrossButtonClick() {
    dispatch(changeDisplayState());
  }

  return (
    display && (
      <div className={styles.collapsableMenu}>
        <div className={styles.menuDrawer}>
          <div className={styles.crossButton} onClick={onCrossButtonClick}>
            <Image
              className={styles.pinterest}
              src={closeIcon}
              alt="facebook"
            ></Image>
          </div>
          <div className={styles.menuItems}>
            <Link href="/coloring-pages" className={styles.menuItem}>
              Coloring Pages
            </Link>
            <Link href="/kids-crafts" className={styles.menuItem}>
              Kids Crafts
            </Link>
          </div>
          <div className={styles.social}>
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
          <div>
            <>
              <input
                className={styles.searchBar}
                placeholder="Search..."
                type="text"
              />
            </>
          </div>
        </div>
      </div>
    )
  );
}

export default CollapsableMenu;
