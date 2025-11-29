import React from 'react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
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
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm me-2"
                    >
                      View Code
                    </a>
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
