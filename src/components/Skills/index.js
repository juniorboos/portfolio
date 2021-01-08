import { useEffect, useRef, useState } from "react";
import styles from "../../styles/Skills.module.css";

const Skills = () => {
   const section = useRef(null);
   const container = useRef(null);
   const border = useRef(null);
   const [barWidth, setBarWidth] = useState(0);

   const skills = [
      {
         name: "Javascript",
         level: "90%",
      },
      {
         name: "React",
         level: "80%",
      },
      {
         name: "HTML",
         level: "80%",
      },
      {
         name: "CSS",
         level: "60%",
      },
      {
         name: "React Native",
         level: "60%",
      },
      {
         name: "Node.js",
         level: "50%",
      },
   ];

   const handleScroll = () => {
      let sectionY = section.current.getBoundingClientRect();
      let section_height = section.current.offsetHeight;
      const opacity =
         (window.pageYOffset - section_height) /
         (sectionY.top + section_height);

      container.current.style.opacity = opacity;

      // container.current.style.transform = `translateY(${
      //    ((window.pageYOffset - section_height) /
      //       (section_height + sectionY.top)) *
      //    -50
      // }px)`;

      const width = (window.pageYOffset / (sectionY.top + section_height)) * 50;
      setBarWidth(`${width}%`);

      border.current.style.width = `${
         ((window.pageYOffset - section_height) /
            (sectionY.top + section_height)) *
         30
      }%`;
      // console.log("-------------");
      // console.log("pageYOffset: " + window.pageYOffset);
      // console.log("top: " + sectionY.top);
      // console.log("section_height: " + section_height);
      // console.log("opacity: " + opacity);
      // console.log(
      //    "translate: " +
      //       `${
      //          (window.pageYOffset / (section_height + sectionY.top)) * -50 + 50
      //       }px`
      // );
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <section ref={section} className={styles.section}>
         <div className={styles.container} ref={container}>
            <h3 className={styles.title}>
               Skills
               <div ref={border} className={styles.border}></div>
            </h3>
            {skills.map((skill, idx) => (
               <div key={idx} className={styles.skill}>
                  <p className={styles.skillName}>{skill.name}</p>
                  <div className={styles.background}>
                     <div
                        className={styles.background}
                        style={{
                           width: skill.level,
                        }}
                     >
                        <div
                           className={styles.skillLevel}
                           style={{ width: barWidth }}
                        ></div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Skills;
