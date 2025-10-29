import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div id="navbar">
      <div className="logo">Rishabh</div>
      <div className="navright">
        <ul>
           <li><a href="#Navbar">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#MyJourney">Journey</a></li>
          <li><a href="#Certification">Certification</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>

  );
}

export default Navbar;   
