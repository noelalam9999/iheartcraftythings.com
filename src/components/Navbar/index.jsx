import React from "react";
import styles from "./style.module.css";
import searchIcon from "../../assets/search-icon.png";
import shareIcon from "../../assets/share-icon.png";
import burgerMenu from "../../assets/burger-menu-icon.png";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeDisplayState } from "../../features/collapsableMenu/collapsable-menu-slice";
import { changeSearchDisplayState } from "../../features/searchBarDisplay/search-bar-display.slice";
import { changeSocialMediaOptionsDisplayState } from "../../features/socialMediaOptions/social-media-options-slice";

import Link from "next/link";
import SearchInputBox from "../SearchInputBox";
import SocialMediaOptions from "../SocialMediaOptions";

function Navbar() {
  const dispatch = useAppDispatch();
  function onBurgerMenuClick() {
    dispatch(changeDisplayState());
  }

  function onSearchIconHover(display) {
    dispatch(changeSearchDisplayState(display));
  }

  function onSocialMediaIconHover(display) {
    dispatch(changeSocialMediaOptionsDisplayState(display));
  }

  return (
    <div className={styles.navbar}>
      <div onClick={onBurgerMenuClick} className={styles.burgerMenu}>
        <Image
          src={burgerMenu}
          className={styles.burgerMenuIconImg}
          alt="burger-menu"
        />
      </div>
      <div className={styles.logoMenuItems}>
        <Link href="/" className={styles.logo}>
          <img
            className={styles.logoImg}
            src="https://iheartcraftythings.com/wp-content/uploads/2021/03/iheartfinallogo-1.png"
            alt="logo"
          />
        </Link>
        <div className={styles.menuItems}>
          <Link href="/coloring-pages" className={styles.menuItem}>
            Coloring Pages
          </Link>
          <Link href="/kids-crafts" className={styles.menuItem}>
            Kids Crafts
          </Link>
        </div>
      </div>
      <div className={styles.searchShareBtn}>
        <div
          onMouseEnter={() => onSearchIconHover(true)}
          onMouseLeave={() => onSearchIconHover(false)}
          className={styles.search}
        >
          <Image
            src={searchIcon}
            className={styles.searchIconImg}
            alt="Search"
          />
          <SearchInputBox />
        </div>
        <div
          onMouseEnter={() => onSocialMediaIconHover(true)}
          onMouseLeave={() => onSocialMediaIconHover(false)}
          className={styles.shareBtn}
        >
          <Image src={shareIcon} className={styles.shareIconImg} alt="share" />
          <SocialMediaOptions />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
