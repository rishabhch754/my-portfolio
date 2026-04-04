import React from "react";
import { useTheme } from "../ThemeContext";
import "./About.css";

function About() {
    const { isDarkMode } = useTheme();

    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2>About Me</h2>
                    <div className="underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="intro">
                            Hi, I'm <span className="highlight">Rishabh Kumar</span>, a passionate 
                            <span className="highlight"> Software Developer</span> specializing in creating 
                            responsive and interactive web applications.
                        </p>
                        
                        <p className="description">
                            I have completed my <span className="highlight">BCA from GLA University</span> and 
                            have been working on various projects that solve real-world problems. My journey in 
                            tech started with a curiosity about how websites work, and now I'm proficient in 
                            creating applications using modern technologies.
                        </p>

                        <div className="stats-container">
                            <div className="stat-item">
                                <span className="stat-number">8</span>
                                <span className="stat-label">Months Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">0</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>

                    <div className="personal-info">
                        <h3>Personal Information</h3>
                        <div className="info-grid">
                            <div className="info-item">
                                <span className="info-label">Name:</span>
                                <span className="info-value">Rishabh Kumar</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Email:</span>
                                <a href="mailto:rishabhch754@gmail.com" className="info-value">rishabhch754@gmail.com</a>
                            </div>
                             <div className="info-item">
                                <span className="info-label">Country:</span>
                                <span className="info-value">India</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">State:</span>
                                <span className="info-value">Uttar Pradesh</span>
                            </div>
                             <div className="info-item">
                                <span className="info-label">City:</span>
                                <span className="info-value">Mathura</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Pin Code:</span>
                                <span className="info-value">281001</span>
                            </div>
                            {/* <div className="info-item">
                                <span className="info-label">Phone:</span>
                                <span className="info-value">+91 9634728358</span>
                            </div> */}
                        </div>

                        <div className="interests">
                            <h4>Interests & Hobbies</h4>
                            <div className="interest-tags">
                                <span className="interest-tag">📚 Reading</span>
                                <span className="interest-tag">💻 Coding</span>
                                <span className="interest-tag">🎮 Gaming</span>
                                <span className="interest-tag">✈️ Traveling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;