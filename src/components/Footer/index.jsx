import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.ourMission}>
          <div className={styles.title}>Disclaimer</div>
          <div className={styles.passage}>
            Kids N Kraft is a participant in affiliate programs and may earn
            commissions from qualifying purchases made through links on our
            site. We also promote advertisements to support and fund our
            website. All content on this website is provided for informational
            and educational purposes only and is not intended as a substitute
            for professional advice
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.title}>EXPLORE THE SITE</div>
          <div className={styles.links}>
            <Link href="/coloring-pages">Coloring Pages</Link>
            <Link href="/mission">About us</Link>
          </div>
        </div>
        <div className={styles.importantPages}>
          <div className={styles.title}>IMPORTANT PAGES</div>
          <div className={styles.links}>
            <Link href="/mission">About</Link>
            <Link href="/safety-disclaimer">Safety Disclaimer</Link>
            <Link href="/terms-of-use">Terms</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>© 2024 kidsnkraft</div>
    </>
  );
}

export default Footer;
