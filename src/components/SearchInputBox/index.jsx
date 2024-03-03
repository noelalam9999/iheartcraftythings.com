import React from "react";
import styles from "./style.module.css";
import { useAppSelector } from "../../app/hooks";

function SearchInputBox() {
  const display = useAppSelector((state) => state.searchBarDisplay.display);

  return (
    display && (
      <div className={styles.searchInputBox}>
        <input
          className={styles.searchInput}
          placeholder="Search..."
          name="search"
          type="text"
        />
      </div>
    )
  );
}

export default SearchInputBox;
