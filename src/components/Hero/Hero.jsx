import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const downloadFile = () => {
    const fileUrl = "hero/ojas-resume.pdf"
    const newWindow = window.open(getImageUrl(fileUrl), '_blank');
    newWindow.opener = window;
    const link = document.createElement("a");
    link.href = getImageUrl(fileUrl);
    link.download = "ojas-resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ojas Chikara</h1>
        <p className={styles.description}>
          I'm a full-stack developer . Reach out if you'd like to learn more!
        </p>
        <a onClick={downloadFile}  className={styles.contactBtn} title="Click The Button">
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero-image.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
