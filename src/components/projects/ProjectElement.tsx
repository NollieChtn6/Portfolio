import { NavLink } from 'react-router-dom';
import { Button } from '../ui/button';

import { ProjectInterface } from '../../@types/dataTypes';

interface ProjectProps {
  project: ProjectInterface;
}

function ProjectElement({ project }: ProjectProps) {
  const { tags } = project;

  return (
    <div className="project-element-container h-[450px] w-[325px] bg-gradient-to-b from-mine-shaft-950 to-mine-shaft-300 rounded-lg p-6 space-y-3 my-3 md:mx-3 border-[1px] border-grandis-400/70 shadow-md">
      <div className="project-element-header flex h-[10%] justify-center items-center">
        <h3 className="text-xl">{project.title}</h3>
      </div>
      <div className="project-element-body h-[70%] flex flex-col space-y-3">
        <div className="image-container flex h-[75%] min-h-[75%] w-full place-content-center">
          <img
            src={project.illustrationUrl}
            alt={project.illustrationAlt}
            className="object-scale-down"
          />
        </div>
        <div className="tags flex self-start flex-wrap">
          {tags.map((tag) => {
            return (
              <p
                className="tag px-2 m-1 text-xs rounded-md bg-grandis-400 text-mine-shaft-700 shadow-md"
                key={tag}
              >
                #{tag}
              </p>
            );
          })}
        </div>
      </div>
      <div className="project-element-footer flex h-[15%] items-center justify-center">
        <NavLink to={`/projects/${project.slug}`}>
          <Button size="cta">En savoir plus</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default ProjectElement;
