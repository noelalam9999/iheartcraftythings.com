import React from "react";
import styles from "./style.module.css";
import searchIcon from "../../assets/search-icon.png";
import shareIcon from "../../assets/share.svg";
import burgerMenu from "../../assets/burger-menu-icon.png";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeDisplayState } from "../../features/collapsableMenu/collapsable-menu-slice";
import { changeSearchDisplayState } from "../../features/searchBarDisplay/search-bar-display.slice";
import { changeSocialMediaOptionsDisplayState } from "../../features/socialMediaOptions/social-media-options-slice";
import Link from "next/link";
import SearchInputBox from "../SearchInputBox";
import SocialMediaOptions from "../SocialMediaOptions";
import useBlogListDistance from "../../hooks/BlogListDistance";

function Navbar() {
  //redux functions for handling search and share animations
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

  //zustand function to handle shadow animation on scroll
  const { blogListDistance } = useBlogListDistance();

  return (
    <div
      className={`${styles.navbar} ${
        blogListDistance < 60 ? `${styles.shadow}` : ""
      }`}
    >
      <div onClick={onBurgerMenuClick} className={styles.burgerMenu}>
        <Image
          src={burgerMenu}
          className={styles.burgerMenuIconImg}
          alt="burger-menu"
        />
      </div>
      <div className={styles.logoMenuItems}>
        <Link href="/" className={styles.logo}>
          <Image className={styles.logoImg} src={logo} alt="logo" />
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
