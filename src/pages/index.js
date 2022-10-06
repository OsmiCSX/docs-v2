import React from 'react';
// import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Button from '../components/Button';
import CardLatestFollower from '../components/CardLatestFollower';
import CardFollower from '../components/CardFollower';
import CardLikes from '../components/CardLikes';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // clsx('hero hero--primary, styles.heroBanner)',
    <header className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        {/* <h1 className="">{siteConfig.title}</h1> */}
        <p className={styles.heroTagline}>An utility style framework for <span className={styles.heroSpan}>React Native</span> </p>
        <div className={styles.buttons}>
          <Button />
        </div>
      </div>
      <div className={styles.cardSection}>
        <CardLatestFollower/>
        <div className={styles.cardFlex}>
          <CardFollower/>
          <CardLikes/>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Documentation`}
      description="OsmiCSX - An utility style framework for React Native">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
