import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Button from "../components/Button";
import HomepageWhatIsOsmi from "../components/HomepageWhatIsOsmi.jsx";
import HomepageWhyOsmi from "../components/HomepageWhyOsmi.jsx";
import { InstallOsmicsx } from "../components/Command";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroContainer}>
      <p className={styles.heroTagline}>
        Osmi<span className={styles.heroSpan}>CSX</span>{" "}
      </p>
      <p className={styles.desc}>
        An utility style framework for React Native.
      </p>
      <div>
        <InstallOsmicsx />
      </div>

      <Button />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector("nav.navbar").className =
        "navbar navbar--fixed-top navbar-with-shadow";
    } else {
      document.querySelector("nav.navbar").className =
        "navbar navbar--fixed-top navbar-no-shadow";
    }
  }

  return (
    <Layout
      title={`Documentation`}
      description="OsmiCSX - An utility style framework for React Native"
    >
      <HomepageHeader />

      <main>
        {/* What is Osmi Section */}
        <HomepageWhatIsOsmi />

        {/* Why Osmi Section */}
        <HomepageWhyOsmi />
      </main>
    </Layout>
  );
}
