import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h5 className="fw-bold mb-3">{personalInfo.name}</h5>
            <p className="mb-0">{personalInfo.tagline}</p>
          </div>
          <div className="col-lg-4 mb-3 mb-lg-0 text-lg-center">
            <h6 className="fw-bold mb-3">Connect</h6>
            <div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon me-3"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-lg-end">
            <h6 className="fw-bold mb-3">Contact</h6>
            <p className="mb-1">
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>
            <p className="mb-0">{personalInfo.location}</p>
          </div>
        </div>
        <div className="footer-copyright text-center">
          <p className="mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
