import React, { useState } from "react";
import Link from "next/link"
//import styles
import styles from "./scrollitem.module.css";

const ScrollItem = () => {
  const mouseHandler = (event) => {
    const scroll = event.target.scrollHeight - 370;
    event.target.style = `--scrollNumber: -${scroll}px`;
  };
  return (


<div className={styles.container}>


    <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/55.jpg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>See All</button>
  </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/qqq.jpg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>More info</button>
  </Link>
    </section>

    {/* <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/qqq.jpg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>More info</button>
  </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/qqq.jpg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>More info</button>
  </Link>
    </section> */}







</div>
);
};

export default ScrollItem;
