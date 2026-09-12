import React from 'react';
import { bio } from '../data/portfolioData';

const Bio = () => {
  return (
    <section id="bio" className="section">
      <p className="eyebrow">About</p>
      <h2 className="bio-heading">Machine learning engineer and researcher</h2>
      <div className="bio-text">
        {bio.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
    </section>
  );
};

export default Bio;
