import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import Lottie from "react-lottie";
import dotsAnimation from "@/assets/dots.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: dotsAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

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
      {props?.showDots && (
        <div className={`${styles.message} ${styles.left}`}>
          <p className={`${styles.bubble} ${styles.fadeIn}`}>
            {" "}
            <Lottie options={defaultOptions} height={25} width={50} />
          </p>
        </div>
      )}
    </div>
  );
});
Messages.displayName = "Messages";
export default Messages;
