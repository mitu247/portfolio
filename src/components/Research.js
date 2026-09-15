import React from 'react';
import { research } from '../data/portfolioData';

const Research = () => {
  return (
    <section id="research" className="section">
      <h2 className="section-heading">Research</h2>
      <div className="research-list">
        {research.map((pub) => (
          <div key={pub.id} className="research-item">
            {pub.thumbnail && (
              <img
                src={pub.thumbnail}
                alt={pub.title}
                className="research-thumb"
              />
            )}
            <div className="research-body">
              <div className="research-title">
                {pub.link && pub.link !== '#' ? (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer">
                    {pub.title}
                  </a>
                ) : (
                  <span>{pub.title}</span>
                )}
              </div>
              <div className="research-meta">
                <span>{pub.authors}</span>
                <span> · </span>
                <span>{pub.venue}</span>
                <span> · </span>
                <span className="research-year">{pub.year}</span>
              </div>
              {pub.abstract && (
                <p className="research-abstract">{pub.abstract}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Research;
