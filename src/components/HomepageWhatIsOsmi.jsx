import React from "react";
import styles from "./HomepageWhatIsOsmi.module.css";

function WhatIsCard() {
  return (
    <div className={styles.card}>
      <img src="/img/home.svg" className={styles.homeSvg} alt="bg-home" />

      <img src="/img/sphere.svg" className={styles.cardSvg} alt="bg-card" />
      <p className={styles.cardText}>
        <b>OsmiCSX </b>
        is a utility React Native style framework for rapidly building custom
        user interfaces. We adopted the Tailwind concept and implement it for
        styling in React Native. OsmiCSX designed for customizing UI in React
        Native and makes a reusable component with the style as you want with
        very simple code.
      </p>
    </div>
  );
}

export default function HomepageWhatIsOsmi() {
  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            What is <br />
            <span className={styles.textPrimary}>OsmiCSX</span>
          </h1>
        </div>

        <div className={styles.right}>
          <WhatIsCard />
        </div>
      </div>
    </section>
  );
}
