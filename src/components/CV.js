import React from 'react';
import { cv } from '../data/portfolioData';
import { FileText, GraduationCap, Briefcase, Wrench } from 'lucide-react';

const CV = () => {
  return (
    <section id="cv" className="section">
      <div className="container">
        <h2 className="section-title">
          Curriculum Vitae
          <a
            href={cv.downloadLink}
            className="btn btn-accent btn-sm d-inline-flex align-items-center gap-2"
            download
          >
            <FileText size={16} />
            Download Full CV
          </a>
        </h2>

        <div className="row g-4">
          {/* Education */}
          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <span className="icon-container me-2">
                    <GraduationCap size={24} />
                  </span>
                  <h4 className="card-title mb-0">Education</h4>
                </div>
                {cv.education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h6 className="fw-bold mb-1">{edu.degree}</h6>
                    <p className="text-accent mb-1" style={{color: 'var(--accent-academic)', fontWeight: 500}}>{edu.institution}</p>
                    <p className="text-muted small mb-1">{edu.year}</p>
                    <p className="card-text small">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="col-lg-6">
            <div className="card h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <span className="icon-container me-2">
                    <Briefcase size={24} />
                  </span>
                  <h4 className="card-title mb-0">Experience</h4>
                </div>
                {cv.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <h6 className="fw-bold mb-1">{exp.title}</h6>
                    <p className="text-accent mb-1" style={{color: 'var(--accent-academic)', fontWeight: 500}}>{exp.company}</p>
                    <p className="text-muted small mb-1">{exp.year}</p>
                    <p className="card-text small">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="row mt-4">
          <div className="col-12">
            <div className="card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-4">
                  <span className="icon-container me-2">
                    <Wrench size={24} />
                  </span>
                  <h4 className="card-title mb-0">Skills</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {cv.skills.map((skill, index) => (
                    <span key={index} className="badge-custom">
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
