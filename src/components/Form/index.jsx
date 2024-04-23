import React from "react";
import styles from "./style.module.css";
function Form({ handleSubmit }) {
  return (
    <div className={styles.formBackground}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            placeholder="Type your message here"
            id="message"
          />
          <button className={styles.submit} type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
