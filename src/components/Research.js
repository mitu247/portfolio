import React from 'react';
import { research } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="section">
      <div className="container">
        <h2 className="section-title">Research</h2>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            {research.map((publication) => (
              <div className="card mb-4 border-0 shadow-sm" key={publication.id} style={{ borderLeft: '4px solid var(--accent-academic) !important' }}>
                <div className="card-body p-4" style={{ borderLeft: '4px solid var(--accent-academic)', borderRadius: '0 12px 12px 0' }}>
                  <h5 className="publication-title mb-2">
                    {publication.link && publication.link !== "#" ? (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-dark hover-accent"
                      >
                        {publication.title}
                      </a>
                    ) : (
                      <span>{publication.title}</span>
                    )}
                  </h5>
                  <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">
                    <span className="text-muted small italic">{publication.authors}</span>
                    <span className="text-muted small">•</span>
                    <span className="text-accent small fw-500" style={{ color: 'var(--accent-academic)' }}>{publication.venue}</span>
                    <span className="text-muted small">•</span>
                    <span className="text-muted small">{publication.year}</span>
                  </div>
                  <p className="card-text small text-secondary mb-4">{publication.abstract}</p>
                  {publication.link && publication.link !== "#" ? (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-primary d-inline-flex align-items-center gap-2"
                    >
                      <ExternalLink size={14} />
                      View Paper
                    </a>
                  ) : (
                    <span className="btn btn-sm btn-outline-secondary disabled">
                      Internal Project
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
