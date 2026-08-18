import React from 'react';
import { bio, cv } from '../data/portfolioData';

const Bio = () => {
  return (
    <section id="bio" className="section">
      <h2 className="section-heading">About Me</h2>
      <div className="bio-text">
        {bio.content.split('\n\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
      {cv.about && (
        <>
          <h3 className="section-subheading">Current Work</h3>
          <p>{cv.about}</p>
        </>
      )}
    </section>
  );
};

export default Bio;
