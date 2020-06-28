import React from "react";
import styles from "./About.module.css";

export const Content2 = () => {
  return (
    <div className={styles.content2}>
      <h1 className={styles.content2Inside}>
        How Dangerous is <span>COVID-19</span>
      </h1>
      <h5 className={styles.content2Inside}>
        Although for most people COVID-19 causes only mild illness, it can make
        some people very ill. More rarely, the disease can be fatal. Older
        people, and those with pre- existing medical conditions (such as high
        blood pressure, heart problems or diabetes) appear to be more
        vulnerable.
      </h5>
    </div>
  );
};
