import React, { useState } from "react";
import Link from "next/link"
//import styles
import styles from "./scrollitem.module.css";

const ScrollItem2 = () => {
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
        src="/images/555.jpeg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href='/'>
      <button className={styles.more}>Details</button>
  </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/558.jpeg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>Details</button>
  </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/557.jpg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>Details</button>
  </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/559.jpeg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>Details</button>
  </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/6666.jpeg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>Details</button>
  </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/1.jpeg"
        alt="img"
      />
      <div className={styles.hover}></div>
      <h1 className={styles.hoverTitle}> </h1>
  <Link href=''>
      <button className={styles.more}>Details</button>
  </Link>
    </section>

    







</div>
);
};

export default ScrollItem2;
