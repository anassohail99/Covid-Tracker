import React from "react";
import styles from "./About.module.css";

const Content1 = () => {
  return (
    <div className={styles.background}>
      <div className={styles.content1}>
        <h1 className={styles.contentInside}>
          What is <span>COVID-19</span>
        </h1>
        <h5 className={styles.contentInside}>
          Coronavirus disease (COVID-19) is an infectious disease caused by a
          newly discovered coronavirus
        </h5>
        <a
          href="https://www.who.int/health-topics/coronavirus#tab=tab_1"
          target="_blank"
        >
          <button className={styles.contentInside}>More Information</button>
        </a>
      </div>
    </div>
  );
};

export default Content1;
