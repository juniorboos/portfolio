import { Provider as AlertProvider } from "react-alert";

import AlertTemplate from "react-alert-template-basic";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { Element } from "react-scroll";

const options = {
  position: "bottom center",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
};

export default function Home() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <div className="App">
        <Navbar />
        <Element id="header" name="header">
          <Header />
        </Element>
        <Element id="about" name="about">
          <About />
        </Element>
        <Element id="skills" name="skills">
          <Skills />
        </Element>
        <Element id="projects" name="projects">
          <Projects />
        </Element>
        <Element id="contact" name="contact">
          <Contact />
        </Element>
      </div>
    </AlertProvider>
  )
}
