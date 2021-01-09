import { useEffect, useRef } from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";

import profile from "../../assets/profile.jpg";

const About = () => {
  const shadow = useRef(null);
  const content = useRef(null);
  const section = useRef(null);
  const image_container = useRef(null);
  const border = useRef(null);

  const handleScroll = () => {
    let sectionY = section.current.getBoundingClientRect();
    let section_height = section.current.offsetHeight;
    const opacity = window.pageYOffset / (sectionY.top + section_height);

    content.current.style.opacity = opacity;
    image_container.current.style.opacity = opacity;

    shadow.current.style.height = `${window.pageYOffset * 0.5 + 300}px`;

    // content.current.style.transform = `translateY(${
    //    (window.pageYOffset / (section_height + sectionY.top)) * -50 + 50
    // }px)`;

    // image_container.current.style.transform = `translateY(${
    //    (window.pageYOffset / (section_height + sectionY.top)) * -50 + 50
    // }px)`;

    border.current.style.width = `${
      (window.pageYOffset / (sectionY.top + section_height)) * 30
    }%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={section} className={styles.section}>
      <div ref={shadow} className={styles.shadow}></div>

      <div className={styles.container}>
        <div ref={content} className={styles.content + " " + styles.opacity}>
          <h3 className={styles.title}>
            About me
            <div ref={border} className={styles.border}></div>
          </h3>
          <p className={styles.text}>
            21 years old, born in Brazil, currently doing a master's degree in
            Information Systems at the Polytechnic Institute of Bragança. Before
            that, studied at the Federal University of Technology - Paraná as a
            graduate in Computer Science.
          </p>
          <br />
          <p className={styles.text}>
            I love working on front-end and web development as a whole, solving
            problems and finding easy and better solutions to appear intuitive
            and simple. Always try my best to create a good interface with the
            best user experience. I started this project to learn more about
            visual designs and improve my skills.
          </p>
        </div>

        <div
          ref={image_container}
          className={styles.imgContainer + " " + styles.opacity}
        >
          <Image
            src={profile}
            alt=""
            width={400}
            height={400}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
