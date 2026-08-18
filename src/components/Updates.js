import React from 'react';
import { updates } from '../data/portfolioData';

const Updates = () => {
  return (
    <section id="updates" className="section">
      <h2 className="section-heading">Updates</h2>
      <div className="timeline">
        {updates.map((update) => (
          <div key={update.id} className="timeline-item">
            <div className="timeline-date">{update.date}</div>
            <div className="timeline-text">{update.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Updates;
