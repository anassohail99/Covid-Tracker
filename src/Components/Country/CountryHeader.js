import React from "react";
import styles from "./Country.module.css";

const CountryHeader = () => {
  return (
    <div className={styles.countryHeader}>
      <div className={styles.background}>
        <div className={styles.content1}>
          <h1 className={styles.contentInside}>
            COUNTRY VIZ STATISTICS OF <span>COVID-19</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CountryHeader;
