import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import { ProjectInterface } from '../../@types/dataTypes';

interface ProjectProps {
  project: ProjectInterface;
}

function ProjectElement({ project }: ProjectProps) {
  const { tags } = project;

  return (
    <div className="project-element-container h-[450px] w-[325px] bg-gradient-to-b from-slate-900 to-royal-blue-900 rounded-lg p-6 space-y-3 my-3 md:mx-3 border-2 border-royal-blue-700 shadow-md">
      <div className="project-element-header flex h-[10%] justify-center items-center">
        <h3 className="text-xl font-mono font-semibold text-woodsmoke-200">
          {project.title}
        </h3>
      </div>
      <div className="project-element-body h-[70%] flex flex-col space-y-3">
        <div className="image-container flex h-[75%] min-h-[75%] w-full place-content-center bg-royal-blue-300/80">
          <img
            src={project.illustrationUrl}
            alt={project.illustrationAlt}
            className="object-scale-down"
          />
        </div>
        <div className="tags flex self-start flex-wrap">
          {tags.map((tag) => {
            return (
              <div
                className="tag px-2 m-1 text-xs rounded-md bg-royal-blue-500 text-woodsmoke-200 shadow-md shadow-royal-blue-950"
                key={tag}
              >
                #{tag}
              </div>
            );
          })}
        </div>
      </div>
      <div className="project-element-footer flex h-[15%] items-center justify-center">
        <NavLink to={`/projects/${project.slug}`}>
          <Button className="bg-royal-blue-400 w-[130px]">
            En savoir plus
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default ProjectElement;
