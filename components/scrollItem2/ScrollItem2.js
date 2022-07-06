import React, { useState } from "react";
import Link from "next/link"
//import styles
import styles from "./scrollitem.module.css";

const ScrollItem2 = () => {
  // const mouseHandler = (event) => {
  //   const scroll = event.target.scrollHeight - 370;
  //   event.target.style = `--scrollNumber: -${scroll}px`;
  // };
  return (


<div className={styles.container}>


    <section  className={styles.imageContainer}>
      <img
        // onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/a1.jpg"
        alt="img"
      />
      {/* <div className={styles.hover}></div> */}
      {/* <h1 className={styles.hoverTitle}> </h1> */}
      <Link href='/'>
          <button className={styles.more}>DETAILS</button>
      </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        // onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/a2.jpg"
        alt="img"
      />
      {/* <div className={styles.hover}></div> */}
      {/* <h1 className={styles.hoverTitle}> DETAILS</h1> */}
  <Link href=''>
      <button className={styles.more}>DETAILS</button>
  </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        // onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/a3.jpg"
        alt="img"
      />
      {/* <div className={styles.hover}></div> */}
      {/* <h1 className={styles.hoverTitle}> </h1> */}
      <Link href=''>
          <button className={styles.more}>DETAILS</button>
      </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        // onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/a4.jpg"
        alt="img"
      />
      {/* <div className={styles.hover}></div> */}
      {/* <h1 className={styles.hoverTitle}> </h1> */}
      <Link href=''>
          <button className={styles.more}>DETAILS</button>
      </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        // onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/a6.jpg"
        alt="img"
      />
      {/* <div className={styles.hover}></div> */}
      {/* <h1 className={styles.hoverTitle}> </h1> */}
      <Link href=''>
          <button className={styles.more}>DETAILS</button>
      </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        // onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/a7.jpg"
        alt="img"
      />
      {/* <div className={styles.hover}></div> */}
      {/* <h1 className={styles.hoverTitle}> </h1> */}
      <Link href=''>
          <button className={styles.more}>DETAILS</button>
      </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        // onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/a9.jpg"
        alt="img"
      />
      {/* <div className={styles.hover}></div> */}
      {/* <h1 className={styles.hoverTitle}> </h1> */}
      <Link href=''>
          <button className={styles.more}>DETAILS</button>
      </Link>
    </section>

    <section  className={styles.imageContainer}>
      <img
        // onMouseEnter={mouseHandler}
        className={styles.image}
        src="/images/a10.jpg"
        alt="img"
      />
      {/* <div className={styles.hover}></div> */}
      {/* <h1 className={styles.hoverTitle}> </h1> */}
      <Link href=''>
          <button className={styles.more}>DETAILS</button>
      </Link>
    </section>



</div>
);
};

export default ScrollItem2;
