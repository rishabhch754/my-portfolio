import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MyJourney from "./components/MyJourney";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About />
    <Skills />
    <Projects />
    <MyJourney />
    <Certification />
    <Contact />
    <Footer /> 
  </div>
  );
}
export default App;
