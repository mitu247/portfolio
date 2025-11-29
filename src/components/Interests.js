import React from 'react';
import { interests } from '../data/portfolioData';

const Interests = () => {
  return (
    <section id="interests" className="section">
      <div className="container">
        <h2 className="section-title">Interests</h2>
        <div className="row g-4">
          {interests.map((interest) => (
            <div className="col-lg-4 col-md-6" key={interest.id}>
              <div className="card h-100">
                <div className="card-body interest-item">
                  <div className="interest-icon">{interest.icon}</div>
                  <h5 className="interest-title">{interest.title}</h5>
                  <p className="interest-description">{interest.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
