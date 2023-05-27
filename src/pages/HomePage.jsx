import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Interests from "../components/Interests";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { animateScroll as scroll } from "react-scroll";

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div className="home-page">
      <div className="sections">
        <div className="aboutme-skills">
          <section id="about-me">
            <AboutMe />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="interests">
            <Interests />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
