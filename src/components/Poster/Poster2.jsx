import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/notebook.png";
import { Link } from "react-router-dom";

const Poster2 = () => (
  <>
    <div className={styles.title}>BIG SALE 20%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the bestseller of 2023</div>
        <h1 className={styles.head}>Spark r2d2 with NVIDIA 3090 TI</h1>
        <Link to={`/categories/2`}>
          <button className={styles.button}>Shop Now</button>
        </Link>
        
      </div>
      <div className={styles.image}>
        <img src={BG} alt="" />
      </div>
    </div>
  </>
);

export default Poster2;
