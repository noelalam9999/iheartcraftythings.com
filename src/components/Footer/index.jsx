import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.ourMission}>
          <div className={styles.title}>OUR MISSION</div>
          <div className={styles.passage}>
            Since we first launched in 2001 we have had one simple mission.
            Deliver the best crafts and fun activities for all our readers.
            <br /> <br />
            From arts and crafts, to drawing and coloring there really is
            something for everyone here, so please explore and most importantly
            - have fun!
            <br />
            <br />
            We love to hear your feedback so remember to connect with us on
            social media and say hello!
            <br />
            <br /> I Heart Crafty Things is a participant in the Amazon Services
            LLC Associates Program, an affiliate advertising program designed to
            provide a means for sites to earn advertising fees by advertising
            and linking to amazon.com.
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.title}>EXPLORE THE SITE</div>
          <div className={styles.links}>
            <Link href="/coloring-pages">Coloring Pages</Link>
            <Link href="/kids-crafts">Kids Crafts</Link>
          </div>
        </div>
        <div className={styles.importantPages}>
          <div className={styles.title}>IMPORTANT PAGES</div>
          <div className={styles.links}>
            <Link href="">About</Link>
            <Link href="">Safety Disclaimer</Link>
            <Link href="">Terms</Link>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>© 2024 kidsnkraft</div>
    </>
  );
}

export default Footer;
