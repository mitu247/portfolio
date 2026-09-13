import React from 'react';
import { projects, professionalProjects } from '../data/portfolioData';

const ProjectItem = ({ project, card = false }) => (
  <article className={`project-item${card ? ' project-card' : ''}`}>
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
  </article>
);

const academicGroups = [
  {
    title: 'AI & Applications',
    projects: projects.filter((project) => project.category === 'ai')
  },
  {
    title: 'Systems & Foundations',
    projects: projects.filter((project) => project.category === 'systems')
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Projects</h2>
      <p className="section-intro">Selected systems that show how I turn machine-learning ideas into evaluated pipelines, alongside academic projects that demonstrate breadth across software and core computer science.</p>
      <div className="project-list">
        {professionalProjects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
      <div className="category-label">Academic & Course Projects</div>
      <div className="academic-groups">
        {academicGroups.map((group) => (
          <section className="academic-group" key={group.title}>
            <h3 className="academic-group-heading">{group.title}</h3>
            <div className="academic-project-grid">
              {group.projects.map((project) => (
                <ProjectItem key={project.id} project={project} card />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Projects;
