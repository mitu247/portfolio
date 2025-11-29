import React from 'react';
import { bio, personalInfo } from '../data/portfolioData';

const Bio = () => {
  return (
    <section id="bio" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="row align-items-center">
          <div className="col-lg-4 text-center mb-4 mb-lg-0">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="bio-image"
            />
          </div>
          <div className="col-lg-8">
            <div className="bio-content">
              {bio.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
            <div className="mt-4">
              <span className="me-3">
                <strong>📍 Location:</strong> {personalInfo.location}
              </span>
              <span>
                <strong>📧 Email:</strong>{' '}
                <a href={`mailto:${personalInfo.email}`} className="text-decoration-none">
                  {personalInfo.email}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
