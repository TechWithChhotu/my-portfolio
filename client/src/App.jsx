import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
// import Contact from "./components/Contact";

import Contact from "./components/Contect";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageRenderer from "./components/PageRenderer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
