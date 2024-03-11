import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const ProjectsTopic = () => {
  const keys = Object.keys(projects);

  return (
    <div className="scrollspy-topic">
      <h4 id="scrollspy-projects">Projects</h4>
      <p>Alguns dos projetos pessoais que desenvolvi.</p>
      <div>
        {keys.map((key) => (
          <ProjectCard key={key} name={key} project={projects[key]} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsTopic;
