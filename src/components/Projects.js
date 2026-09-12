import React from 'react';
import { projects, professionalProjects } from '../data/portfolioData';

const ProjectItem = ({ project }) => (
  <div className="project-item">
    <div className="project-title">
      {project.link && project.link !== '#' ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.title}
        </a>
      ) : (
        <span>{project.title}</span>
      )}
    </div>
    <p className="project-desc">{project.description}</p>
    {project.highlights && project.highlights.length > 0 && (
      <div className="project-highlights">
        {project.highlights.map((h, i) => (
          <span key={i} className="highlight-tag">{h}</span>
        ))}
      </div>
    )}
    <div className="tech-tags">
      {project.technologies.map((tech, i) => (
        <span key={i} className="tech-tag">{tech}</span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Projects</h2>
      <p className="section-intro">Selected work in language models, evaluation, and applied machine learning.</p>
      <div className="project-list">
        {professionalProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      <div className="category-label">Academic & Course Projects</div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
