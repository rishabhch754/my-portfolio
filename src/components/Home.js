import React, { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";
import "./Home.css";

function Home() {
    const { isDarkMode } = useTheme();
    
    //roles ka array
    const roles = ["Software Developer", "Java Developer"];
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = roles[currentRole];
            
            if (isDeleting) {
                // Text delete kar rahe hain
                setDisplayText(fullText.substring(0, displayText.length - 1));
                setTypingSpeed(75); // Delete karne ki speed
            } else {
                // Text type kar rahe hain
                setDisplayText(fullText.substring(0, displayText.length + 1));
                setTypingSpeed(150); // Type karne ki speed
            }

            // Agar poora text type ho gaya
            if (!isDeleting && displayText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // 2 second ruko
                setTypingSpeed(75);
            }
            
            // Agar poora text delete ho gaya
            if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentRole((prev) => (prev + 1) % roles.length); // Next role
                setTypingSpeed(150);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRole, roles, typingSpeed]);

    return (
        <section id="home" className="home-section">
            <div className="container">
                <div className="home-content">
                    <div className="profile-wrapper">
                        <div className="profile-image-container">
                            <div className="profile-image-border">
                                <img 
                                    src="/images/profile picture linkedin.png" 
                                    alt="Rishabh Kumar" 
                                    className="profile-image"
                                />
                            </div>
                            <div className="floating-elements">
                                <span className="floating-dot"></span>
                                <span className="floating-dot"></span>
                                <span className="floating-dot"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="intro-text">
                        <h1 className="greeting">Hello, I'm</h1>
                        <h2 className="name">Rishabh Kumar</h2>
                        
                        <h3 className="role">
                            {displayText}
                            <span className="cursor"></span>
                        </h3>
                        
                        <p className="description">
                            I craft modern, responsive, and user-friendly web experiences 
                            that bring ideas to life with clean code and creative design.
                        </p>
                        
                        <div className="cta-buttons">
                            <a href="#contact" className="btn btn-primary">
                                <span>Get In Touch</span>
                                <i className="fas fa-arrow-right"></i>
                            </a>
                            <a href="/Rishabh_Kumar_Resume.pdf" className="btn btn-secondary" target="_blank">
                                <i className="fas fa-eye"></i>
                                <span>View CV</span>
                            </a>
                            <a href="/Rishabh_Kumar_Resume.pdf" className="btn btn-outline" download>
                                <i className="fas fa-download"></i>
                                <span>Download CV</span>
                            </a>
                        </div>
                        
                        <div className="social-links">
                            <a href="https://github.com/rishabhch754/rishabhch754" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/rishabh-kumar-88469b255/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="mailto:rishabhch754@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                            {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a> */}
                            
                        </div>
                    </div>
                </div>
                
                {/* <div className="scroll-indicator">
                    <span>Scroll Down</span>
                    <i className="fas fa-chevron-down"></i>
                </div> */}
            </div>
        </section>
    );
}

export default Home;