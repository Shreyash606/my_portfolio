// src/components/Footer.js
import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="section-socials">
        <div className="page-padding">
          <div className="container">
            <div class="contact-section">
              <a
                href="https://drive.google.com/file/d/1LVN42UWguKdrTAlv0SQy3y2moHz-TKwK/view?usp=sharing"
                class="resume-button"
                target="_blank"
              >
                RESUME
              </a>
              <div class="social-icons">
                <a
                  href="https://www.linkedin.com/in/shreyashthakare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="2x"
                    style={{ color: "#000000" }}
                  />
                </a>
                <a
                  href="https://www.github.com/shreyash606"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="2x"
                    style={{ color: "#000000" }}
                  />
                </a>
                <a
                  href="https://www.instagram.com/shreyashthakare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="2x"
                    style={{ color: "#000000" }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/shreyashthakare/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    size="2x"
                    style={{ color: "#000000" }}
                  />
                </a>
              </div>
              <h1>Looking for a Software Engineer?</h1>
              <a
                href="mailto:shreyashthakare1093@gmail.com"
                class="contact-button"
              >
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
