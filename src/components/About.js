// src/components/About.js
import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="section-hero">
      <div className="page-padding">
        <div className="hero-container container">
          <div className="hero-heading-wrapper w-embed">
            <h1 className="hero-heading">
              <span className="herow line-1">Shreyash Thakare</span>
            </h1>
          </div>
          <div className="hero-intro">
            <div className="hero-intro-text">
              I'm a graduate student and a aspiring software developer. I have a
              passion for learning and sharing my knowledge with others as
              publicly as possible. I believe in solving real world problems
              with technology.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
