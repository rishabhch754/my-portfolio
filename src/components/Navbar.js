import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when window resizes to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav id="navbar">
      <div className="logo">Rishabh</div>
      
      {/* Hamburger Menu Icon */}
      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Menu */}
      <div className={`navright ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#home" className={activeSection === "home" ? "active" : ""} onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className={activeSection === "about" ? "active" : ""} onClick={closeMenu}>About</a></li>
          <li><a href="#skills" className={activeSection === "skills" ? "active" : ""} onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" className={activeSection === "projects" ? "active" : ""} onClick={closeMenu}>Projects</a></li>
          <li><a href="#journey" className={activeSection === "journey" ? "active" : ""} onClick={closeMenu}>Journey</a></li>
          <li><a href="#certification" className={activeSection === "certification" ? "active" : ""} onClick={closeMenu}>Certification</a></li>
          <li><a href="#contact" className={activeSection === "contact" ? "active" : ""} onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;