import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Simplicity First 👌',
    // Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Minimal setup with ready to use boilerplate project structure helps you focus on your style.
      </>
    ),
  },
  {
    title: 'Templating Friendly 💙',
    // Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        OsmiCSX provides tools for extracting component classes from repeated utility patterns, making it easy to update multiple instances of a component from one place.
      </>
    ),
  },
  {
    title: 'Tailwind-Powered 🔥',
    // Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Enjoy the dev experience of building React Native app, using reusable classes, and easy implementing with styling like Tailwind.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
