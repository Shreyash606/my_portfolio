// src/components/Projects.js
import React from "react";
import "./projects.css";

// Import all project images at once
import semanticImage from "./Resources/Semantic Search.png";
import project2Image from "./Resources/MavsMart.png";
import project3Image from "./Resources/DineDiscover.png";
import project4Image from "./Resources/TaskScheduler.png";
import project5Image from "./Resources/Distributed.png";
import project6Image from "./Resources/FoodDelivery.png";
import project7Image from "./Resources/Twitter.png"; // Add more images as needed
import project8Image from "./Resources/Stocks.png";

// Alternative approach: Create an images object
const projectImages = {
  semantic: semanticImage,
  project2: project2Image,
  project3: project3Image,
  project4: project4Image,
  project5: project5Image,
  project6: project6Image,
  project7: project7Image,
  project8: project8Image,
};

const Projects = () => {
  const projectsData = [
    {
      name: "Semantic Movie Search",
      image: projectImages.semantic, // Use from images object
      description:
        "Cleaned and prepared IMDb dataset using Python and Pandas, ensuring data quality. Applied advanced NLP techniques, including transformer models for tokenization and embedding; reduced search query resolution time by 40% and improved search accuracy by 25%. Implemented a user-friendly web application using Streamlit and Docker, allowing users to search for movies based on semantic similarity.",
      technologies: [
        "Python",
        "Pandas",
        "NLP",
        "Transformers",
        "Streamlit",
        "Docker",
        "Machine Learning",
      ],
      link: "https://github.com/Shreyash606/semantic_search",
    },
    {
      name: "MavsMart",
      image: projectImages.project2, // Use from images object
      description:
        "Engineered a centralized React marketplace for 1,000+ students to replace fragmented WhatsApp trading, hosted on UTA.cloud with Tailwind CSS for responsive UI. Developed Express.js backend with MongoDB, reducing post-creation time by 50% via RESTful APIs. Secured user authentication via Firebase reducing 95% unauthorized access; deployed backend on AWS EC2 with GitHub Actions CI/CD, cutting deployment errors by 40%.",
      technologies: [
        "React",
        "Express",
        "MongoDB",
        "Firebase",
        "AWS EC2",
        "GitHub Actions",
        "Tailwind CSS",
      ],
      link: "https://mavsmart.uta.cloud/",
    },
    {
      name: "Dine Discover",
      image: projectImages.project3,
      description:
        "Created a restaurant finder app using PHP and Yelp API, optimizing queries to handle 200+ requests/sec. Reduced SQL injection risks by 90% via prepared statements, maintaining 99.9% uptime for 500+ users.",
      projectType: "Personal Project",
      technologies: ["PHP", "Yelp API", "HTML", "CSS", "JavaScript", "MySQL"],
      link: "https://github.com/Shreyash606",
    },
    {
      name: "Process Monitor & Scheduler Simulator",
      image: projectImages.project4,
      description:
        "Simulated Round Robin and Priority Scheduling in C++ with multithreading, achieving 90% accuracy in CPU time allocation across 100+ concurrent processes. Built a real-time terminal dashboard in Python to monitor process states and resource usage, reducing debug time by 40% in system simulations.",

      technologies: [
        "C++",
        "Python",
        "Linux (Ubuntu)",
        "Multithreading",
        "Shell Scripting",
      ],
      link: "https://github.com/Shreyash606",
    },
    {
      name: "Distributed File Storage and Computing System",
      image: projectImages.project5,
      description:
        "Designed a multithreaded file server using gRPC, enabling concurrent file operations for 100+ users. Automated client-server synchronization, ensuring 99.9% data consistency across distributed nodes.",

      technologies: ["Python", "gRPC", "Multithreading", "Distributed Systems"],
      link: "https://github.com/Shreyash606",
    },
    {
      name: "Food Delivery App",
      image: projectImages.project6, // or whichever image slot you want to use
      description:
        "Created a full-stack app with React and Node.js, integrating Stripe for payments to increase transaction success by 20%. Implemented JWT authentication, reducing security risks by 90%, and REST APIs for real-time order tracking.",

      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Stripe API",
        "CSS",
        "Git",
      ],
      link: "https://github.com/Shreyash606",
    },
    {
      name: "Twitter Sentiment Analysis using Deep Learning",
      image: projectImages.project7, // or whichever image slot you want to use
      description:
        "Developed CNN and BERT models for Twitter sentiment analysis, achieving 83.09% and 76.63% accuracy respectively on Sentiment140. Integrated Sentiment140 with Smile Twitter Emotion dataset and used pre-trained Word2Vec embeddings for enhanced model performance. Applied L2 regularization and dropout to prevent overfitting, optimizing model accuracy and generalization.",

      technologies: [
        "Python",
        "CNN",
        "BERT",
        "Word2Vec",
        "Deep Learning",
        "NLP",
        "TensorFlow",
        "PyTorch",
      ],
      link: "https://github.com/Shreyash606",
    },
    {
      name: "Stock Analysis Chatbot Assistant",
      image: projectImages.project8, // or whichever image slot you want to use
      description:
        "Developed an AI-powered chatbot using OpenAI's GPT-3.5 and yfinance API for comprehensive stock analysis. Implemented technical indicators including SMA, EMA, RSI, and MACD calculations with real-time data visualization. Built interactive Streamlit interface enabling natural language queries for stock price retrieval, moving averages, and year-over-year price plotting.",

      technologies: [
        "Python",
        "OpenAI GPT-3.5",
        "Streamlit",
        "yfinance",
        "Pandas",
        "Matplotlib",
        "API Integration",
      ],
      link: "https://github.com/Shreyash606",
    },
  ];

  return (
    <section className="section-projects">
      <div className="page-padding">
        <div className="container">
          <hr className="divider" />
          <h3 className="header-text"> &#x2022; PROJECTS</h3>
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card">
                <div className="card-inner">
                  {/* Front side - Project Image and Name */}
                  <div className="card-front">
                    <img src={project.image} alt={project.name} />
                    <div className="project-name-overlay">
                      <h3>{project.name}</h3>
                    </div>
                  </div>

                  {/* Back side - Project Information */}
                  <div className="card-back">
                    <div className="project-info">
                      <h4>{project.name}</h4>
                      <p>{project.description}</p>
                      <div className="project-tech">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex}>{tech}</span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
