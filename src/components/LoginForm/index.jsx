import React, { useEffect, useRef, useState } from "react";
import { login } from "../../services/authentication/login";
import styles from "./style.module.css";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

function LoginForm() {
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();
    const password = passwordRef.current.value;
    if (password) {
      const response = await login(password);
      if (response.data.token) {
        window.localStorage.setItem("token", response.data.token);
        router.push("/upload");
      } else {
        if (response.data.error) {
          setError(response.data.error);
        } else {
          setError("Error");
        }
      }
    } else {
      setError("Insert Password");
    }
  }
  return (
    <div className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <input
          className={styles.input}
          type="password"
          ref={passwordRef}
          placeholder="Enter password"
        />
        <input className={styles.submit} type="submit" />
        <div>{error && error}</div>
      </form>
    </div>
  );
}

export default LoginForm;
