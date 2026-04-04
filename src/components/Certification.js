import React from "react";
import { useTheme } from "../ThemeContext";
import "./Certification.css";

const certificates = [
    {
        id: 1,
        title: "Web Development",
        issuer: "Coursera",
        date: "2024",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        issuer: "Udemy",
        date: "2023",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "React Native Developer",
        issuer: "Meta",
        date: "2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  
];

function Certification() {
    const { isDarkMode } = useTheme();

    return (
        <section id="certification" className="certification-section">
            <div className="container">
                <div className="section-header">
                    <h2>Certifications</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">Professional credentials that validate my expertise</p>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <div key={cert.id} className="certificate-card" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="certificate-image">
                                <img src={cert.image} alt={cert.title} />
                                <div className="certificate-overlay">
                                    <span className="view-credential">View Certificate</span>
                                </div>
                            </div>
                            
                            <div className="certificate-content">
                                <h3>{cert.title}</h3>
                                <div className="certificate-meta">
                                    <span className="issuer">
                                        <i className="fas fa-building"></i>
                                        {cert.issuer}
                                    </span>
                                    <span className="date">
                                        <i className="fas fa-calendar"></i>
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Certification;