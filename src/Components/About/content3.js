import React from "react";
import styles from "./About.module.css";
import svg from "../assets/vector.png";

const content3 = () => {
  return (
    <div className={styles.content3}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={svg} alt="" srcset="" />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className={styles.content3Inside}>
              <h1>Do’s and Don’ts</h1>
              <h4>
                Self-quarantining and social distancing is the best protocol you
                can follow at this point, especially since many areas are
                enforcing lockdowns and shelter in place orders.
                Self-quarantining and social distancing is the best protocol you
                can follow at this point, especially since many areas are
                enforcing lockdowns and shelter in place orders.
              </h4>
              <a
                href="https://www.webmd.com/lung/news/20200228/preparing-for-coronavirus-dos-and-donts"
                target="_blank"
              >
                <button className={styles.contentInside}>
                  More Information
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content3;
