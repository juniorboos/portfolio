import { useEffect, useRef } from "react";
import styles from "../../styles/Projects.module.css";
import { Event } from "../../services/analytics";
import Image from "next/image";

import agendaPG from "../../assets/Projects/agenda-pg.png";
import arbeit from "../../assets/Projects/arbeit.png";
import beTheHero from "../../assets/Projects/be-the-hero.png";
import daiMakeup from "../../assets/Projects/dai-makeup.png";
import docinhosDaLay from "../../assets/Projects/docinhos-da-lay.png";
import encryptedChat from "../../assets/Projects/encrypted-chat.png";
import parkingManagement from "../../assets/Projects/iParking-management.png";
import parkingMobile from "../../assets/Projects/iParking-mobile.png";
import parkingWeb from "../../assets/Projects/iParking-web.png";
import locdown from "../../assets/Projects/locdown.png";
import nextLevel from "../../assets/Projects/next-level.png";
import portfolio1 from "../../assets/Projects/portfolio-v1.png";
import pokenjo from "../../assets/Projects/pokenjo.png";

const Projects = () => {
  const border = useRef(null);
  const section = useRef(null);
  const container = useRef(null);

  const projectsList = [
    [
      {
        name: "iParking Web",
        image: parkingWeb,
        technologies: ["React", "CSS Animations"],
        url: "https://github.com/juniorboos/iParkingWeb",
        size: {
          width: 654,
          height: 1350,
        },
      },
      {
        name: "iParking Management",
        image: parkingManagement,
        technologies: ["React", "CSS Animations", "Firebase"],
        url: "https://github.com/juniorboos/iParking-Management",
        size: {
          width: 654,
          height: 1015,
        },
      },
      {
        name: "Ecoleta",
        image: nextLevel,
        technologies: ["React", "Node.js", "React Native", "SQLite"],
        url: "https://github.com/juniorboos/nextlevel",
        size: {
          width: 654,
          height: 1041,
        },
      },
    ],
    [
      {
        name: "Portfolio 1.0",
        image: portfolio1,
        technologies: ["React", "CSS"],
        url: "https://github.com/juniorboos/portfolio-v1",
        size: {
          width: 654,
          height: 1775,
        },
      },
      {
        name: "Dai Veigand Makeup",
        image: daiMakeup,
        technologies: ["Photoshop", "Figma", "OpenToonz"],
        url: "https://www.instagram.com/daiveigand_makeup/",
        size: {
          width: 654,
          height: 1571,
        },
      },
    ],
    [
      {
        name: "Docinhos da Lay",
        image: docinhosDaLay,
        technologies: ["HTML", "CSS", "JS"],
        url: "https://docinhosdalay.netlify.app",
        size: {
          width: 654,
          height: 1841,
        },
      },
      {
        name: "Be the Hero",
        image: beTheHero,
        technologies: ["React", "Node.js", "SQLite"],
        url: "https://github.com/juniorboos/omnistack11",
        size: {
          width: 654,
          height: 1074,
        },
      },
      {
        name: "Jo-ken-po",
        image: pokenjo,
        technologies: ["React", "HTML", "CSS Animations"],
        url: "https://pokenjo.netlify.app",
        size: {
          width: 654,
          height: 383,
        },
      },
    ],
    [
      {
        name: "iParking Mobile",
        image: parkingMobile,
        technologies: ["React Native", "Firebase"],
        url: "https://github.com/juniorboos/iParking",
        size: {
          width: 654,
          height: 673,
        },
      },
      {
        name: "Arbeit",
        image: arbeit,
        technologies: ["React Native", "Firebase"],
        url: "https://devpost.com/software/arbeit",
        size: {
          width: 654,
          height: 691,
        },
      },
      {
        name: "LocDown",
        image: locdown,
        technologies: ["React", "Ionic", "Node.js", "MongoDB"],
        url: "https://github.com/lrmendes/LocDown-E-Commerce-Local",
        size: {
          width: 654,
          height: 638,
        },
      },
      {
        name: "AgendaPG",
        image: agendaPG,
        technologies: ["React Native", "Firebase"],
        url: "https://github.com/juniorboos/AgendaPG",
        size: {
          width: 654,
          height: 638,
        },
      },
      {
        name: "Encrypted Chat",
        image: encryptedChat,
        technologies: ["React Native", "Firebase"],
        url: "https://github.com/lrmendes/Encrypted-Chat-APP",
        size: {
          width: 654,
          height: 638,
        },
      },
    ],
  ];

  const handleClick = (project) => {
    window.open(project.url, "_blank");
    Event("PROJECT", "CLICKED", project.name);
  };

  const handleScroll = () => {
    let sectionY = section.current.getBoundingClientRect();
    // let section_height = section.current.offsetHeight;
    let section_height = window.innerHeight;
    const opacity = (window.pageYOffset - sectionY.top) / window.pageYOffset;

    container.current.style.opacity = opacity;

    border.current.style.width = `${
      (window.pageYOffset / (sectionY.top + section_height)) * 15
    }%`;

    // console.log("----------");
    // console.log("pageYOffset: " + window.pageYOffset);
    // console.log("section_height: " + section_height);
    // console.log("top: " + sectionY.top);
    // console.log("opacity: " + opacity);
    // console.log(
    //    "border: " +
    //       `${
    //          ((window.pageYOffset - section_height) /
    //             (sectionY.top + section_height)) *
    //          30
    //       }%`
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
          Projects
          <div ref={border} className={styles.border}></div>
        </h3>
        <div className={styles.row}>
          {projectsList.map((column, idx1) => (
            <div className={styles.column} key={idx1}>
              {column.map((project, idx2) => (
                <div key={idx2} className={styles.img}>
                  <Image
                    src={project.image}
                    alt=""
                    layout="responsive"
                    width={project.size.width}
                    height={project.size.height}
                    objectFit="cover"
                    onClick={() => handleClick(project)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
