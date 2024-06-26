import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import { ProjectInterface } from '../../@types/dataTypes';

interface ProjectProps {
  project: ProjectInterface;
}

function ProjectElement({ project }: ProjectProps) {
  return (
    <div className="project-element-container h-[425px] w-[325px] bg-gradient-to-b from-slate-900 to-royal-blue-900 rounded-lg p-6 space-y-3 my-3 md:mx-3 border-2 border-royal-blue-700 shadow-md">
      <div className="project-element-header flex h-[10%] justify-center items-center">
        <h3 className="text-xl font-mono font-semibold text-woodsmoke-200">
          {project.title}
        </h3>
      </div>
      <div className="project-element-body h-[70%] flex flex-col space-y-3">
        <div className="image-container flex h-[75%] min-h-[75%] w-full place-content-center">
          <img
            src={project.illustrationUrl}
            alt={project.illustrationAlt}
            className="object-scale-down brightness-75"
          />
        </div>
        <p className="project-summary flex line-clamp-3 text-sm h-[25%] self-start text-woodsmoke-200">
          {project.summary}
        </p>
      </div>
      {project.deploymentUrl ? (
        <div className="project-element-footer flex h-[15%] justify-between items-center">
          <NavLink to={project.githubUrl}>
            <Button className="bg-royal-blue-400 w-[130px]">Code source</Button>
          </NavLink>
          <NavLink to={project.githubUrl}>
            <Button className="bg-royal-blue-400 w-[130px]">
              Voir le site
            </Button>
          </NavLink>
        </div>
      ) : (
        <div className="project-element-footer flex h-[15%] justify-center items-center">
          <NavLink to={project.githubUrl}>
            <Button className="bg-royal-blue-400 w-[130px]">Code source</Button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default ProjectElement;
