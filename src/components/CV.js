import React from 'react';
import { cv } from '../data/portfolioData';
import { FileText } from 'lucide-react';

const CV = () => {
  return (
    <section id="cv" className="section">
      <div className="cv-callout">
        <div>
          <h2 className="section-heading">Curriculum Vitae</h2>
          <p>Education, research experience, publications, and technical work.</p>
        </div>
        <a href={cv.downloadLink} target="_blank" rel="noopener noreferrer">
          <FileText size={15} />
          View CV (PDF)
        </a>
      </div>
    </section>
  );
};

export default CV;
