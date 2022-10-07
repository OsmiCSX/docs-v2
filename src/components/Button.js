import React from "react";
import Link from "@docusaurus/Link";
import styles from "./ButtonHero.module.css";

const Button = () => {
  return (
    <Link className={styles.buttonhero} to="/docs/intro">
      Getting Started
    </Link>
  );
};

export default Button;
