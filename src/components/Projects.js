import React from 'react';
import { projects, professionalProjects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Professional / Featured Projects */}
        <div className="featured-projects-label">
          <span className="featured-badge">★ Personal ML Explorations</span>
        </div>
        <div className="row g-4 mb-5">
          {professionalProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={`pro-${project.id}`}>
              <div className="card h-100 featured-card">
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-start justify-content-between mb-2">
                    <h5 className="card-title mb-0">{project.title}</h5>
                    <span className="featured-star" title="Professional Project">🔬</span>
                  </div>
                  <p className="card-text flex-grow-1">{project.description}</p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mb-3">
                      {project.highlights.map((highlight, index) => (
                        <span key={index} className="badge badge-highlight me-1 mb-1">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge badge-custom me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    {project.link && project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm me-2"
                      >
                        View Code
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-outline-secondary disabled me-2">
                        Not Shareable
                      </span>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent btn-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic / Course Projects */}
        <div className="featured-projects-label">
          <span className="academic-badge">📚 Academic & Course Projects</span>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge badge-custom me-1 mb-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    {project.link && project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary btn-sm me-2"
                      >
                        View Code
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-outline-secondary disabled me-2">
                        Not Shareable
                      </span>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
