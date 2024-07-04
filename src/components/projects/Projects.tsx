import { useState } from 'react';

import ProjectElement from './ProjectElement';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';

import projects from '../../data/projects.json';

function Projects() {
  const projectsList = projects;
  const sandboxProjects = projectsList.filter(
    (sandboxProject) => sandboxProject.sandbox === true
  );
  const [displaySandboxOnly, setDisplaySandboxOnly] = useState(false);

  return (
    <main className="projects-container flex flex-col md:flex-row h-full overflow-hidden">
      <div className="projects-title flex w-full md:h-full md:w-[10%] items-center md:justify-center">
        <h2 className="text-woodsmoke-200 md:rotate-180 md:[writing-mode:vertical-rl] text-3xl p-6 uppercase tracking-wide font-mono">
          Projets
        </h2>
      </div>
      <div className="projects-content flex flex-col w-full h-full p-3 items-center space-y-6 overflow-hidden">
        <div className="w-full h-[50px] px-3 max-md:hidden md:display">
          <div className="flex items-center space-x-2 h-full justify-end">
            <Label
              htmlFor="display-sandbox-projects"
              className="font-mono text-woodsmoke-200"
            >
              Sandbox
            </Label>
            <Switch
              id="display-sandbox-projects"
              onCheckedChange={() => setDisplaySandboxOnly(!displaySandboxOnly)}
            />
          </div>
        </div>
        <div className="projects-list flex flex-col grow md:flex-row md:flex-wrap p-3 md:justify-evenly max-md:items-center overflow-y-auto h-full w-full">
          {displaySandboxOnly
            ? sandboxProjects.map((project) => {
                return <ProjectElement key={project.id} project={project} />;
              })
            : projectsList.map((project) => {
                return <ProjectElement key={project.id} project={project} />;
              })}
        </div>
      </div>
    </main>
  );
}

export default Projects;
