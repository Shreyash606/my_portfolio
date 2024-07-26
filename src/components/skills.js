// src/components/Projects.js
import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <section className="experience-section">
      <div class="page-padding">
        <div className="container">
          <hr class="divider" />

          <div class="experience-grid">
            <div class="skills">
              <h2>SKILLS</h2>
            </div>
            <div class="project-tags">
              <span>JavaScript</span>
              <span>CSS</span>
              <span>HTML</span>
              <span>React</span>
              <span>Python</span>
              <span> SQL (Proficient)</span> <span> JavaScript</span>{" "}
              <span> C++</span>
              <span>Machine Learning</span> <span>Node</span>{" "}
              <span> MongoDB </span> <span> Git</span> <span> MySQL</span>
              <span>REST APIs</span> <span>gRPC</span>
              <span>Pandas</span> <span> NumPy</span>
              <span>Matplotlib</span> <span> Scikit-Learn</span>{" "}
              <span>TensorFlow</span> <span> Keras</span>
            </div>
          </div>
        </div>
        <hr class="divider" />
      </div>
      
    </section>
  );
};

export default Skills;
