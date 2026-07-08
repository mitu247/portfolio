import React from 'react';
import { projects, professionalProjects } from '../data/portfolioData';
import { Star, Microscope, Book, Code, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Professional / Featured Projects */}
        <div className="featured-projects-label">
          <span className="featured-badge d-inline-flex align-items-center gap-2">
            <Star size={14} fill="currentColor" />
            Personal ML Explorations
          </span>
        </div>
        <div className="row g-4 mb-4">
          {professionalProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={`pro-${project.id}`}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex align-items-start justify-content-between mb-3">
                    <h5 className="card-title mb-0">{project.title}</h5>
                    <span className="icon-container" title="Professional Project">
                      <Microscope size={18} />
                    </span>
                  </div>
                  <p className="card-text small flex-grow-1 mb-4">{project.description}</p>

                  {/* Highlights */}
                  {project.highlights && (
                    <div className="mb-3">
                      {project.highlights.map((highlight, index) => (
                        <span key={index} className="badge-custom badge-highlight">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge-custom">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto d-flex gap-2">
                    {project.link && project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm d-inline-flex align-items-center gap-2"
                      >
                        <Code size={14} />
                        Code
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-outline-secondary disabled">
                        Private
                      </span>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-accent btn-sm d-inline-flex align-items-center gap-2"
                      >
                        <ExternalLink size={14} />
                        Demo
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
          <span className="academic-badge d-inline-flex align-items-center gap-2">
            <Book size={14} />
            Academic & Course Projects
          </span>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="card h-100">
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title mb-3">{project.title}</h5>
                  <p className="card-text small flex-grow-1 mb-4">{project.description}</p>
                  <div className="mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge-custom">
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
                        className="btn btn-outline-primary btn-sm d-inline-flex align-items-center gap-2"
                      >
                        <Code size={14} />
                        View Code
                      </a>
                    ) : (
                      <span className="btn btn-sm btn-outline-secondary disabled">
                        Private
                      </span>
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
