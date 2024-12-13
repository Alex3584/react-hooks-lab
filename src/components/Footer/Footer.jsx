import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">
            © 2024 React Hooks Lab | All rights reserved.
          </p>
          <a
            href="https://github.com/Alex3584/react-hooks-lab.git"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <i className="footer__icon fab fa-github"></i> GitHub Repository
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
