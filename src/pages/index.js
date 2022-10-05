import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageWhatIsOsmi from "../components/HomepageWhatIsOsmi.jsx";
import HomepageWhyOsmi from "../components/HomepageWhyOsmi.jsx";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Getting Started 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="OsmiCSX - An utility style framework for React Native"
    >
      <main>
        {/* What is Osmi Section */}
        <HomepageWhatIsOsmi />

        {/* Why Osmi Section */}
        <HomepageWhyOsmi />
      </main>
    </Layout>
  );
}
