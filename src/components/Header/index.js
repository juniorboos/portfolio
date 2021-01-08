import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

import mountain1 from "../../assets/mountain1.png";
import mountain2 from "../../assets/mountain2.png";
import mountain3 from "../../assets/mountain3.png";
import sky from "../../assets/sky.png";

import { Event } from "../../services/analytics";

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [loading, setLoading] = useState(true);
  const big_title = useRef(null);
  const header = useRef(null);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);

    big_title.current.style.opacity =
      -window.pageYOffset / (header.current.offsetHeight / 2) + 1;
    big_title.current.style.transform = `translateY(${
      window.pageYOffset * 0.1
    }px)`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.open(
      "https://drive.google.com/file/d/11i_cv0EFxQObIySe0kjGCZli48_fSjAZ/view?usp=sharing",
      "_blank"
    );
    Event("CV", "CLICKED", "Curriculum");
  };

  return (
    <header ref={header} className={styles.header}>
      {loading && (
        <div className={styles.loading}>
          <div className={styles.gooey}>
            <span className={styles.dot}></span>
            <div className={styles.dots}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      )}
      <h1 ref={big_title} className={styles.bigTitle + " " + styles.translate}>
        Milton Boos Junior
        <button className={styles.downloadcv} onClick={() => handleClick()}>
          Download CV
        </button>
      </h1>

      <div
        className={styles.mountain1 + " " + styles.translate}
        style={{ transform: `translateY(${offsetY * -0.25}px)` }}
      >
        <Image
          layout="fixed"
          src={mountain1}
          alt=""
          width={1920}
          height={779}
        />
      </div>
      <div
        className={styles.mountain2 + " " + styles.translate}
        style={{ transform: `translateY(${offsetY * 0.2}px)` }}
      >
        <Image
          layout="fixed"
          src={mountain2}
          alt=""
          width={1920}
          height={550}
        />
      </div>

      <div
        className={styles.mountain3 + " " + styles.translate}
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <Image
          layout="fixed"
          src={mountain3}
          alt=""
          width={1920}
          height={667}
        />
      </div>
      <div
        className={styles.sky + " " + styles.translate}
        alt=""
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <Image
          layout="fixed"
          src={sky}
          alt=""
          onLoad={() => setLoading(false)}
          width={1920}
          height={1280}
        />
      </div>
    </header>
  );
};

export default Header;
