import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import "./Projects.css";

function Projects() {
    const { isDarkMode } = useTheme();
    const [filter, setFilter] = useState("all");
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            category: "fullstack",
            description: "Full-featured e-commerce platform with payment integration, user authentication, and admin panel.",
            tech: ["React", "Java", "Spring Boot", "Stripe"],
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            liveDemo: "https://demo.com",
            github: "https://github.com",
            featured: true
        },
        {
            id: 2,
            title: "Employee Management System",
            category: "fullstack",
            description: "Collaborative task management tool with real-time updates and team features.",
            tech: ["React", "Java", "Spring Boot", "Hibernate", "MySql"],
            image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            liveDemo: "https://demo.com",
            github: "https://github.com"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            category: "mini",
            description: "Real-time weather application with 5-day forecast and location search.",
            tech: ["React", "OpenWeather API", "Chart.js"],
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            liveDemo: "https://demo.com",
            github: "https://github.com"
        },
        {
            id: 5,
            title: "Calculator App",
            category: "mini",
            description: "Modern calculator with dark mode and advanced mathematical functions.",
            tech: ["JavaScript", "CSS3", "HTML5"],
            image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            liveDemo: "https://demo.com",
            github: "https://github.com"
        },
        {
            id: 6,
            title: "Portfolio Template",
            category: "mini",
            description: "Modern portfolio template with dark/light mode and animations.",
            tech: ["React", "Framer Motion", "SCSS"],
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            liveDemo: "https://demo.com",
            github: "https://github.com"
        }
    ];

    const filteredProjects = filter === "all" 
        ? projects 
        : projects.filter(project => project.category === filter);

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="section-header">
                    <h2>My Projects</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">Some of my recent work</p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-container">
                    <button 
                        className={`filter-btn ${filter === "all" ? "active" : ""}`}
                        onClick={() => setFilter("all")}
                    >
                        <i className="fas fa-layer-group"></i>
                        All Projects
                    </button>
                    <button 
                        className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
                        onClick={() => setFilter("fullstack")}
                    >
                        <i className="fas fa-code-branch"></i>
                        Full Stack
                    </button>
                    <button 
                        className={`filter-btn ${filter === "mini" ? "active" : ""}`}
                        onClick={() => setFilter("mini")}
                    >
                        <i className="fas fa-microchip"></i>
                        Mini Projects
                    </button>
                </div>

                {/* Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={project.id} 
                            className={`project-card ${project.featured ? "featured" : ""}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="fas fa-external-link-alt"></i>
                                            <span>Live Demo</span>
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <i className="fab fa-github"></i>
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                </div>
                                {/* {project.featured && (
                                    <span className="featured-badge">
                                        <i className="fas fa-star"></i>
                                        Featured
                                    </span>
                                )} */}
                            </div>

                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Stats */}
                            {/* {hoveredProject === project.id && (
                                <div className="project-stats">
                                    <div className="stat">
                                        <i className="fas fa-code"></i>
                                        <span>{project.tech.length} Technologies</span>
                                    </div>
                                    <div className="stat">
                                        <i className="fas fa-clock"></i>
                                        <span>3 months development</span>
                                    </div>
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                {/* <div className="view-more">
                    <a href="https://github.com/rishabh" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        <i className="fab fa-github"></i>
                        View More on GitHub
                    </a>
                </div> */}
            </div>
        </section>
    );
}

export default Projects;