import React, { useEffect } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MyJourney from "./components/MyJourney";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <ThemeToggle />
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <MyJourney />
          <Certification />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
export default App;