import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const Messages = forwardRef((props, ref) => {
  return (
    <div className={styles.messagesContainer}>
      {props.messages?.map((message) => (
        <>
          <div
            key={message.id}
            className={`${styles.message} ${
              message.self ? styles.right : styles.left
            }`}
          >
            <p className={`${styles.bubble} ${styles.fadeIn}`}>
              {message.content}
            </p>
          </div>
        </>
      ))}
      <div ref={ref}></div>
    </div>
  );
});

export default Messages;
