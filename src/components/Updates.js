import React from 'react';
import { updates } from '../data/portfolioData';

const Updates = () => {
  return (
    <section id="updates" className="section">
      <div className="container">
        <h2 className="section-title">Latest Updates</h2>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {updates.map((update) => (
              <div className="update-item" key={update.id}>
                <p className="update-date">{update.date}</p>
                <p className="update-text">{update.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Updates;
