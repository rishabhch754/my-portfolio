import React from "react";
import { useTheme } from "../ThemeContext";
import "./MyJourney.css";

function MyJourney() {
    const { isDarkMode } = useTheme();

    const journeyData = {
        education: [
            {
                id: 1,
                title: "Bachelor of Computer Applications",
                institution: "GLA University, Mathura",
                year: "2022 - 2025",
                description: "Specialized in full-stack development with coursework in Data Structures, Algorithms, Database Management, and Web Technologies."
            },
            {
                id: 2,
                title: "Intermediate (12th) - Commerce",
                institution: "SDG Inter College, Mathura",
                year: "2021 - 2022",
                description: "Completed higher secondary education with focus on Mathematics, Economics, and Business Studies."
            },
            {
                id: 3,
                title: "High School (10th)",
                institution: "SDG Inter College, Mathura",
                year: "2019 - 2020",
                description: "Completed secondary education with strong foundation in Science and Mathematics."
            }
        ],
        experience: [
            {
                id: 1,
                title: "Java Full Stack Trainee",
                company: "CETPA Infotech Pvt. Ltd., Noida",
                year: "Sep 2025 - Present",
                type: "Internship",
                description: "Intensive training program focused on enterprise application development.",
                responsibilities: [
                    "Developing full-stack applications using React.js and Spring Boot.",
                    "Implementing RESTful APIs and database integration",
                    "Working on real-time projects."
                ]
            },
            
        ]
    };

    return (
        <section id="journey" className="journey-section">
            <div className="container">
                <div className="section-header">
                    <h2>My Journey</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">Education & Experience</p>
                </div>

                <div className="journey-container">
                    {/* Timeline Line with Dots - ONLY LINE AUR USKE DOTS */}
                    <div className="timeline-line">
                        <div className="timeline-progress"></div>
                        {/* Top Dot (optional) */}
                        <div className="line-dot top-dot"></div>
                        {/* Middle Dot */}
                        <div className="line-dot middle-dot"></div>
                        {/* Bottom Dot */}
                        <div className="line-dot bottom-dot"></div>
                    </div>

                    {/* Education Column - WITHOUT side icons */}
                    <div className="journey-column education-column">
                        <h3 className="column-title">
                            <i className="fas fa-graduation-cap"></i>
                            Education
                        </h3>
                        
                        {journeyData.education.map((item, index) => (
                            <div key={item.id} className="timeline-card" style={{ animationDelay: `${index * 0.2}s` }}>
                            
                                <div className="card-content">
                                    <div className="card-header">
                                        <h4>{item.title}</h4>
                                        <span className="card-type">{item.institution}</span>
                                    </div>
                                    
                                    <div className="card-meta">
                                        <span className="meta-item">
                                            <i className="fas fa-calendar"></i>
                                            {item.year}
                                        </span>
                                    </div>

                                    <p className="card-description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Experience Column - WITHOUT side icons */}
                    <div className="journey-column experience-column">
                        <h3 className="column-title">
                            <i className="fas fa-briefcase"></i>
                            Experience
                        </h3>
                        
                        {journeyData.experience.map((item, index) => (
                            <div key={item.id} className="timeline-card" style={{ animationDelay: `${index * 0.2}s` }}>
                                {/* ❌ Side icon hata diya */}
                                <div className="card-content">
                                    <div className="card-header">
                                        <h4>{item.title}</h4>
                                        <span className="card-type">{item.company}</span>
                                    </div>
                                    
                                    <div className="card-meta">
                                        <span className="meta-item">
                                            <i className="fas fa-calendar"></i>
                                            {item.year}
                                        </span>
                                        <span className="meta-item">
                                            <i className="fas fa-tag"></i>
                                            {item.type}
                                        </span>
                                    </div>

                                    <p className="card-description">{item.description}</p>

                                    <div className="responsibilities">
                                        <h5>Key Responsibilities:</h5>
                                        <ul>
                                            {item.responsibilities.map((resp, i) => (
                                                <li key={i}>
                                                    <i className="fas fa-arrow-right"></i>
                                                    {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyJourney;