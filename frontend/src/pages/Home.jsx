import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contect";

const Home = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
