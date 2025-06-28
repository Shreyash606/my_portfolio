// src/components/About.js
import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="section-hero">
      <div className="page-padding">
        <div className="hero-container container">
          <div className="hero-heading-wrapper">
            <h1 className="hero-heading">
              <span className="herow line-1">Shreyash Thakare</span>
            </h1>
          </div>
          <div className="hero-intro">
            <div className="hero-intro-text">
              I'm a Graduate student and Full Stack developer specializing in
              full-stack development, AI/ML, and distributed systems. I
              transform complex problems into elegant solutions that drive real
              value, with a passion for continuous learning and building
              impactful technology.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
