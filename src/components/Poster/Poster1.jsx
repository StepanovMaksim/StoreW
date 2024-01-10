import React from "react";

import styles from "../../styles/Home.module.css";

import BG from "../../images/banner2.png";

const Poster1 = () => (
  <section className={styles.home}>
    <div className={styles.title}>BIG SALE 20%</div>
    <div className={styles.product}>
      <div className={styles.text}>
        <div className={styles.subtitle}>the bestseller of 2023</div>
        <h1 className={styles.head}>LENOVO r2d2 with NVIDIA 3090 TI</h1>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.image}>
        <img src={BG} style={{width: '500px'}} alt="" />
      </div>
    </div>
  </section>
);

export default Poster1;