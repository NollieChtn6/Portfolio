import { useParams } from 'react-router';
import { useNavigate, NavLink } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import projects from '../../data/projects.json';

import { Button } from '../ui/button';

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projectsList = projects;
  const selectedProject = projectsList.find((project) => project.slug === slug);

  return (
    <main className="about-container flex flex-col md:flex-row max-sm:overflow-y-scroll h-full">
      <div className="about-title flex w-full h-[10%] md:h-full md:w-[10%] items-center md:justify-center">
        <h2 className="text-woodsmoke-200 md:rotate-180 md:[writing-mode:vertical-rl] text-3xl p-6 uppercase tracking-wide font-mono">
          Projets • {selectedProject!.title}
        </h2>
      </div>
      <div className="project-content flex flex-col md:flex-row w-full h-[90%] md:h-full">
        <div className="project-img-container flex h-2/4 md:h-full p-9 md:w-2/4 max-md:hidden place-content-center items-center">
          <img
            src={selectedProject!.illustrationUrl}
            alt={selectedProject!.illustrationAlt}
            className="object-scale-down shadow-lg"
          />
        </div>
        <div className="project-content-container flex flex-col grow md:h-full p-9 md:p-6 md:w-2/4 space-y-6 md:place-content-center">
          <Button onClick={() => navigate(-1)} variant="ghost" size="icon">
            <ArrowLeft color="#ffcb74" />
          </Button>
          <div className="project-header flex space-x-6 items-baseline">
            <h3 className="project-title flex text-3xl uppercase font-mono">
              {selectedProject!.title}
            </h3>
            <div className="project-status flex text-sm italic text-royal-blue-400">
              {selectedProject!.isComplete ? 'Terminé' : 'En cours'}
            </div>
          </div>
          <div className="tags flex self-start flex-wrap">
            {selectedProject?.tags.map((tag) => {
              return (
                <div
                  className="tag px-3 m-2 text-md rounded-md bg-grandis-300 text-wild-sand-700 shadow-md shadow-wild-sand-700"
                  key={tag}
                >
                  #{tag}
                </div>
              );
            })}
          </div>
          <div className="project-summary">
            <p className="italic">{selectedProject!.summary}</p>
          </div>
          <div className="project-description">
            <h4 className="">Présentation du projet</h4>
            <p className="text-content text-md font-light">
              {selectedProject!.description}
            </p>
          </div>
          <div className="tasks-list">
            <h4 className="">Tâches prises en charge</h4>
            <ul>
              {selectedProject!.tasks.map((task) => {
                return <li key={selectedProject!.id}>- {task}</li>;
              })}
            </ul>
          </div>
          {selectedProject!.deploymentUrl ? (
            <div
              className="project-element-footer flex h-[15%] justify-evenly
             items-center"
            >
              <NavLink to={selectedProject!.githubUrl}>
                <Button size="cta" variant="outline">
                  Code source
                  <ExternalLink className="ml-2" />
                </Button>
              </NavLink>
              <NavLink to={selectedProject!.deploymentUrl}>
                <Button size="cta" variant="outline">
                  Voir le site
                  <ExternalLink className="ml-2" />
                </Button>
              </NavLink>
            </div>
          ) : (
            <div className="project-element-footer flex h-[15%] justify-center items-center">
              <NavLink to={selectedProject!.githubUrl}>
                <Button size="cta" variant="outline">
                  Code source
                  <ExternalLink className="ml-2" />
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
