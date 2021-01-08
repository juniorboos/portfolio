import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
   const nav = useRef(null);
   const menu = useRef(null);

   const handleScroll = () => {
      const bgOpacity = window.pageYOffset / window.innerHeight;

      if (bgOpacity <= 1) {
         const background = `linear-gradient(
         to bottom,
         rgba(0, 0, 0, ${bgOpacity - 0.2}),
         rgba(0, 0, 0, ${bgOpacity - 0.4})
      )`;
         nav.current.style.background = background;
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   const activateMenu = () => {
      if (menu.current.style.display === "none") {
         menu.current.style.display = "flex";
      } else {
         menu.current.style.display = "none";
      }
   };

   return (
      <nav ref={nav} className={styles.nav}>
         <div className={styles.container}>
            <Link
               to="header"
               spy={true}
               smooth={true}
               duration={500}
               className={styles.logo}
            >
               Frontend <span>Developer</span>
            </Link>
            <div className={styles.hamburgerMenu} onClick={activateMenu}>
               <div className={styles.bar}></div>
               <div
                  className={styles.menu}
                  style={{ display: "none" }}
                  ref={menu}
               >
                  <Link
                     to="about"
                     spy={true}
                     smooth={true}
                     duration={500}
                     className={styles.scrollLink}
                     onClick={activateMenu}
                  >
                     About
                  </Link>
                  <Link
                     to="skills"
                     spy={true}
                     smooth={true}
                     duration={500}
                     className={styles.scrollLink}
                     onClick={activateMenu}
                  >
                     Skills
                  </Link>
                  <Link
                     to="projects"
                     spy={true}
                     smooth={true}
                     duration={500}
                     className={styles.scrollLink}
                     onClick={activateMenu}
                  >
                     Projects
                  </Link>
                  <Link
                     to="contact"
                     spy={true}
                     smooth={true}
                     duration={500}
                     className={styles.scrollLink}
                     onClick={activateMenu}
                  >
                     Contact
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
