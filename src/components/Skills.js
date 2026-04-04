import React from "react";
import { useTheme } from "../ThemeContext";
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, 
    FaGitAlt, FaGithub, FaBootstrap, FaSpringBoot
} from 'react-icons/fa';
import { 
    SiTailwindcss, SiPostman, SiMysql, 
    SiDocker, SiKubernetes, SiHibernate,
    SiSpring, SiSpringboot
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import "./Skills.css";

function Skills() {
    const { isDarkMode } = useTheme();

    const frontendSkills = [
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6"},
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E"},
        { name: "React", icon: <FaReact />, color: "#61DAFB"},
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4"},
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3"}
    ];

    const backendSkills = [
        { name: "Java", icon: <FaJava />, color: "#007396"},
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F"},  // ✅ Fixed
        { name: "Spring", icon: <SiSpring />, color: "#6DB33F"},           // ✅ Fixed
        { name: "Hibernate", icon: <SiHibernate />, color: "#59666C"},     // ✅ Fixed
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1"},
        { name: "Spring Security", icon: <SiSpring />, color: "#6DB33F"},  // ✅ Added
        { name: "Spring Data JPA", icon: <SiSpring />, color: "#6DB33F"},  // ✅ Added
        { name: "REST APIs", icon: <FaJava />, color: "#007396"}           // ✅ Added
    ];

    const toolsSkills = [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032"},
        { name: "GitHub", icon: <FaGithub />,  color: isDarkMode ? "#ffffff" : "#181717",},
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC"},
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37"},
        { name: "Docker", icon: <SiDocker />, color: "#2496ED"},
        { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5"},
        { name: "Maven", icon: <FaJava />, color: "#C71A36"},              // ✅ Added
        { name: "Gradle", icon: <FaJava />, color: "#02303A"}              // ✅ Added
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <div className="section-header">
                    <h2>My Skills</h2>
                    <div className="underline"></div>
                    <p className="section-subtitle">Technologies I work with</p>
                </div>

                <div className="skills-container">
                    {/* Frontend Skills */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i className="fas fa-code"></i>
                            <h3>Frontend Development</h3>
                        </div>
                        <div className="skills-grid">
                            {frontendSkills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <h4>{skill.name}</h4>
                                </div>
                            ))}
                        </div>      
                    </div>

                    {/* Backend Skills */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i className="fas fa-server"></i>
                            <h3>Backend Development</h3>
                        </div>
                        <div className="skills-grid">
                            {backendSkills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <h4>{skill.name}</h4>
                                </div>
                            ))} 
                        </div>
                    </div>

                    {/* Tools & Technologies */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i className="fas fa-tools"></i>
                            <h3>Tools & Technologies</h3>
                        </div>
                        <div className="skills-grid">
                            {toolsSkills.map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                    <h4>{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;