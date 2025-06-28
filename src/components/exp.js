// src/components/Projects.js
import React from "react";
import "./exp.css";

const Exp = () => {
  return (
    <section className="experience-section">
      <div class="page-padding">
        <div className="container">
          <hr class="divider" />

          <div class="experience-grid">
            <div class="skills">
              <h2>EXPERIENCE</h2>
            </div>

            <div class="projects">
              <div class="project-item">
                <div class="project-time">
                  <div className="text">Aug 23 — Dec 23</div>
                </div>
                <div class="project-details">
                  <h3>
                    Student Assistant · Fablab, University of Texas at Arlington
                  </h3>
                  <p>
                    Guided students in equipment operation for seamless project
                    execution, enhancing technical skills.Demonstrated
                    proficiency with 3D printing and Epilog laser cutting
                    through personal projects, fostering hands-on learning
                  </p>
                  <div class="project-tags">
                    <span>JavaScript</span>
                    <span>Adobe Illustrator</span>
                    <span>Figma</span>
                  </div>
                </div>
              </div>

              <div class="project-item">
                <div class="project-time">
                  <div className="text">Jul 22 - Aug 23</div>
                </div>
                <div class="project-details">
                  <h3>Software Engineer Intern · Stralto Global Pvt. Ltd.</h3>
                  <p>
                    Led a UI overhaul for Stralto Global’s EHS Software, Clide
                    Analyzer, using JavaScript and ReactJS, reducing user error
                    rates by 30%. Integrated APIs for improved frontend-backend
                    communication, cutting response time by 15%. Added a chatbot
                    tool, reducing customer support queries by 30%. Coordinated
                    a 5-developer team with Git, reducing code conflicts by 15%
                    and boosting project completion speed by 20%.
                  </p>
                  <div class="project-tags">
                    <span>JavaScript</span>
                    <span>TypeScript</span>
                    <span>React</span>
                    <span>Tailwind CSS</span>
                    <span>Node</span>
                    <span>REST APIs</span>
                    <span>Git</span>
                    <span>MySQL</span>

                    <span>Figma</span>
                  </div>
                </div>
              </div>

              <div class="project-item">
                <div class="project-time">
                  <div className="text">Dec 21 — Feb 22</div>
                </div>
                <div class="project-details">
                  <h3>Web Development Intern · The Sparks Foundation</h3>
                  <p>
                    Designed and implemented a secure payment gateway for the
                    company’s website, improving transaction efficiency and user
                    experience. Established seamless API communication with
                    payment systems to ensure smooth transactions and developed
                    an intuitive payment process, which increased customer
                    satisfaction and successful transactions.
                  </p>
                  <div class="project-tags">
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>HTML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exp;
