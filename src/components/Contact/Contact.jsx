import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.myIcon} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a target="new" href="mailto:ojaschikaragmail.com">
            ojaschikara@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img className={styles.myIcon}
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a
            target="new"
            href="https://www.linkedin.com/in/ojas-chikara/"
          >
            linkedin.com/Ojaschikara
          </a>
        </li>
        <li className={styles.link}>
          <img className={styles.myIcon} src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a target="new" href="https://github.com/Ojaschikara">
            github.com/Ojaschikara
          </a>
        </li>
        <li className={styles.link}>
          <img className={styles.myIcon} width={50} height={50} src={getImageUrl("contact/contact.png")} alt="Github icon" />
          <h2 >
             &nbsp; +91 6395238967
          </h2>
        </li>
      </ul>
      <button onClick={topFunction} className={styles.myBtn} title="Go to top">
        <img className={styles.myImg} src={getImageUrl("contact/uparrow.png")}/>
      </button>
    </footer>
  );
};
