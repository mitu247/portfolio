import React from 'react';
import { bio, personalInfo } from '../data/portfolioData';
import { MapPin, Mail } from 'lucide-react';

const Bio = () => {
  return (
    <section id="bio" className="section bio-hero-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image, Contact, Socials */}
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <div className="bio-image-wrapper mb-3">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="bio-image"
              />
            </div>
            <div className="bio-contact-info d-inline-block text-start small">
              <div className="d-flex align-items-center mb-2">
                <span className="icon-container me-2">
                  <MapPin size={16} />
                </span>
                <span className="text-secondary">{personalInfo.location}</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span className="icon-container me-2">
                  <Mail size={16} />
                </span>
                <a href={`mailto:${personalInfo.email}`} className="text-decoration-none text-secondary hover-accent">
                  {personalInfo.email}
                </a>
              </div>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Name, Tagline, Bio Narrative */}
          <div className="col-lg-8 ps-lg-5">
            <h1 className="display-4 fw-bold mb-2 main-name">{personalInfo.name}</h1>
            <p className="lead text-muted mb-4 main-tagline">{personalInfo.tagline}</p>
            <div className="bio-text">
              {bio.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
