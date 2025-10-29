import React, { useState } from "react";
import "./project.css";

// ✅ Helper to auto generate unique ID from title + category
const createProject = (title, category, liveDemo, github) => {
  return {
    id: `${title.toLowerCase().replace(/\s+/g, "-")}-${category}`,
    title,
    category,
    liveDemo,
    github,
  };
};


function Projects() {
  // ✅ Projects list with auto-generated IDs
  const allProjects = [
    createProject("To-Do App", "mini","https://live-demo-todo.com", "https://github.com/yourname/todo"),
    createProject("Calculator", "mini","https://live-demo-todo.com", "https://github.com/yourname/todo"),
    createProject("Weather App", "mini","https://live-demo-todo.com", "https://github.com/yourname/todo"),
    
    createProject("E-Commerce Website", "fullstack","https://live-demo-todo.com", "https://github.com/yourname/todo"),
    createProject("Blog Platform", "fullstack","https://live-demo-todo.com", "https://github.com/yourname/todo"),
    createProject("Social Media App", "fullstack","https://live-demo-todo.com", "https://github.com/yourname/todo"),
  ];

  const [category, setCategory] = useState("all");

  const filteredProjects =
    category === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === category);

  return (
    <div id="Projects">
      <h3>Projects</h3>

      {/* Filter Buttons */}
      <div className="filterButton">
        <button
          className={category === "all" ? "active" : ""}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
          className={category === "mini" ? "active" : ""}
          onClick={() => setCategory("mini")}
        >
          Mini Projects
        </button>
        <button
          className={category === "fullstack" ? "active" : ""}
          onClick={() => setCategory("fullstack")}
        >
          Full Stack Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className="Container">
  {filteredProjects.map((project) => (
    <div key={project.id} className="project-card">
      <h4>{project.title}</h4>
      <div className="buttons">
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn">
          Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
          GitHub
        </a>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default Projects;
