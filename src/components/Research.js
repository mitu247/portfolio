import React from 'react';
import { research } from '../data/portfolioData';

const Research = () => {
  return (
    <section id="research" className="section">
      <div className="container">
        <h2 className="section-title">Research</h2>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {research.map((publication) => (
              <div className="publication-item" key={publication.id}>
                <h5 className="publication-title">
                  <a
                    href={publication.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    {publication.title}
                  </a>
                </h5>
                <p className="publication-authors mb-1">{publication.authors}</p>
                <p className="publication-venue mb-2">{publication.venue}</p>
                <p className="card-text small">{publication.abstract}</p>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline-primary"
                >
                  View Paper
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
