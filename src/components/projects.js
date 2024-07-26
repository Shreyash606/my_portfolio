// src/components/Projects.js
import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    
    <section className="section-projects">
    
    
    <div class="page-padding">
    <div className='container'>
    <hr class="divider"/>
    <h3 className="header-text"> &#x2022; PROJECTS</h3> 
    <div class="projects-grid">
      <a href="https://github.com/Shreyash606/Semantic-Search" class="project" target="_blank">
        <img src="src/components/Resources/Semantic.jpg" alt="Semantic Movie Search"/>
        
      </a>
      <a href="https://project2-link.com" class="project" target="_blank">
        <img src="project2.jpg" alt="Project 2"/>
        <p>Project 2</p>
      </a>
      <a href="https://project3-link.com" class="project" target="_blank">
        <img src="project3.jpg" alt="Project 3"/>
        <p>Project 3</p>
      </a>
      <a href="https://project4-link.com" class="project" target="_blank">
        <img src="project4.jpg" alt="Project 4"/>
        <p>Project 4</p>
      </a>
      
      
    </div>
    </div>
    
  </div>
      
    </section>
  );
};

export default Projects;
