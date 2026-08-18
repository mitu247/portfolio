import React from 'react';
import { cv } from '../data/portfolioData';
import { FileText, GraduationCap, Briefcase, Wrench } from 'lucide-react';

const CV = () => {
  return (
    <section id="cv" className="section">
      <h2 className="section-heading">Curriculum Vitae</h2>

      <div className="cv-download">
        <a href={cv.downloadLink} target="_blank" rel="noopener noreferrer">
          <FileText size={15} />
          Download Full CV (PDF)
        </a>
      </div>

      <div className="cv-columns">
        <div className="cv-column">
          <h3 className="cv-group-title">
            <GraduationCap size={18} />
            Education
          </h3>
          {cv.education.map((edu, index) => (
            <div key={index} className="cv-entry">
              <div className="cv-entry-title">{edu.degree}</div>
              <div className="cv-entry-org">{edu.institution}</div>
              <div className="cv-entry-year">{edu.year}</div>
              {edu.description && (
                <div className="cv-entry-desc">{edu.description}</div>
              )}
            </div>
          ))}
        </div>

        <div className="cv-column">
          <h3 className="cv-group-title">
            <Briefcase size={18} />
            Experience
          </h3>
          {cv.experience.map((exp, index) => (
            <div key={index} className="cv-entry">
              <div className="cv-entry-title">{exp.title}</div>
              <div className="cv-entry-org">{exp.company}</div>
              <div className="cv-entry-year">{exp.year}</div>
              {exp.description && (
                <div className="cv-entry-desc">{exp.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '24px' }}>
        <h3 className="cv-group-title">
          <Wrench size={18} />
          Skills
        </h3>
        <div className="skills-list">
          {cv.skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CV;
