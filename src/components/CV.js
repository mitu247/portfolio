import React from 'react';
import { cv } from '../data/portfolioData';

const CV = () => {
  return (
    <section id="cv" className="section">
      <div className="container">
        <h2 className="section-title">Curriculum Vitae</h2>
        
        {/* Download Button */}
        <div className="text-center mb-5">
          <a
            href={cv.downloadLink}
            className="btn btn-accent cv-download-btn"
            download
          >
            📄 Download Full CV
          </a>
        </div>

        <div className="row">
          {/* Education */}
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title mb-4">🎓 Education</h4>
                {cv.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h6 className="fw-bold mb-1">{edu.degree}</h6>
                    <p className="text-primary mb-1">{edu.institution}</p>
                    <p className="text-muted small mb-1">{edu.year}</p>
                    <p className="card-text small">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="col-lg-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title mb-4">💼 Experience</h4>
                {cv.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <h6 className="fw-bold mb-1">{exp.title}</h6>
                    <p className="text-primary mb-1">{exp.company}</p>
                    <p className="text-muted small mb-1">{exp.year}</p>
                    <p className="card-text small">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4">🛠️ Skills</h4>
                <div className="d-flex flex-wrap">
                  {cv.skills.map((skill, index) => (
                    <span key={index} className="badge badge-custom me-2 mb-2">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
