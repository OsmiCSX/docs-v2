import React from "react";
import styles from "./HomepageWhyOsmi.module.css";

function WhyOsmiItemCard({
  imageSource,
  title,
  description,
  learnMoreLink,
  bgType,
  containerStyle,
}) {
  return (
    <div className={styles.card} style={containerStyle}>
      {!bgType ? null : bgType === "orange" ? (
        <img
          src="/img/sphere.svg"
          className={styles.cardBgImageOne}
          alt="bg-card"
        />
      ) : (
        <img
          src="/img/sphere-purple.svg"
          className={styles.cardBgImageTwo}
          alt="bg-card"
        />
      )}
      {imageSource && (
        <img src={imageSource} className={styles.cardImage} alt="card-image" />
      )}
      <h1 className={styles.cardTitle}>{title}</h1>
      <p className={styles.cardDescription}>{description}</p>
      <a href={learnMoreLink} className={styles.learnMore}>
        Learn More
      </a>
    </div>
  );
}

export default function HomepageWhyOsmi() {
  return (
    <div className={styles.wrapper}>
      <img
        src="/img/whyosmi-bg.png"
        className={styles.dekstopBg}
        alt="why-bg"
      />

      <div className={styles.mobileBg}>
        <img src="/img/home-1.png" className={styles.bgLeft} alt="why-bg" />
        <div>
          <div></div>
        </div>
        <img src="/img/home-2.png" className={styles.bgRight} alt="why-bg" />
      </div>

      <div className="container">
        <h1 className={styles.title}>
          <img
            src="/img/home-3.svg"
            className={styles.titleSvg}
            alt="title-bg"
          />
          What is
          <span className={styles.textPrimary}> OsmiCSX ?</span>
        </h1>

        <div className={styles.whyOsmiItems}>
          <WhyOsmiItemCard
            imageSource={"/img/whyosmi-item-1.svg"}
            title="Simplicity First"
            description="Minimal setup with ready to use boilerplate project structure helps you focus on your style."
            bgType="orange"
          />

          <WhyOsmiItemCard
            imageSource={"/img/whyosmi-item-2.svg"}
            title="Templating Friendly"
            description="OsmiCSX provides tools for extracting component classes from repeated utility patterns, making it easy to update multiple instances of a component from one place."
          />

          <WhyOsmiItemCard
            imageSource={"/img/whyosmi-item-3.svg"}
            title="Tailwind-Powered "
            description="Enjoy the dev experience of building React Native app, using reusable classes, and easy implementing with styling like Tailwind."
            bgType="purple"
          />
        </div>
      </div>
    </div>
  );
}
