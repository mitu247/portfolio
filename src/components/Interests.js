import React from 'react';
import { interests } from '../data/portfolioData';

const Interests = () => {
  return (
    <section id="interests" className="section">
      <h2 className="section-heading">Research Interests</h2>
      <div className="interests-grid">
        {interests.map((interest) => (
          <div key={interest.id} className="interest-item">
            <span className="interest-name">{interest.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests;
