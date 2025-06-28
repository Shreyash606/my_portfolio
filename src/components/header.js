import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="page-padding">
        <div className="container">
          <div className="header-inner">
            <a href="#" className="header-logo w-inline-block">
              <div>
                <p>
                  SDT<sup className="superscript">&reg;</sup>-24
                </p>
              </div>
            </a>
            <a
              href="mailto:shreyashthakare1093@gmail.com"
              class="header-button w-inline-block"
            >
              <div class="header-button-text">Contact</div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
