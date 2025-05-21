import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useProjectsStore } from "@/store/projectsStore";

import { Button } from "@/ui/Button";
import { PageTitle } from "@/ui/PageTitle";
import { Tag } from "@/ui/Tag";

export function ProjectDetails() {
  const { selectedProject, setSelectedProject } = useProjectsStore();
  const navigate = useNavigate();

  const handleBackClick = () => {
    setSelectedProject(null);
    navigate("/projects");
  };

  return (
    <main className="about-container flex flex-col md:flex-row max-sm:overflow-y-scroll h-full max-h-screen overflow-hidden">
      <PageTitle title={`Projets • ${selectedProject?.title}`} />
      <div className="project-content flex flex-col md:flex-row w-full grow overflow-hidden">
        <div className="project-img-container hidden md:flex w-full md:w-2/4 p-9 items-center justify-center">
          <img
            src={selectedProject?.illustrationUrl}
            alt={selectedProject?.illustrationAlt}
            className="max-h-[550px] w-auto object-cover shadow-xl rounded-xl"
          />
        </div>
        <div className="project-content-container flex flex-col grow md:h-full p-9 md:p-6 md:w-2/4 space-y-6 md:place-content-center">
          <div>
            <Button
              type="button"
              className="bg-hibiscus-950"
              onClick={handleBackClick}
              variant="ghost"
              size="sm"
              icon={<ArrowLeft className="text-iron-50" />}
            />
          </div>
          <div className="project-header flex space-x-6 items-baseline">
            <h3 className="project-title flex text-3xl uppercase font-mono max-sm:hidden">
              {selectedProject?.title}
            </h3>
            <div className="project-status flex text-sm italic text-hibiscus-600">
              {selectedProject?.isComplete ? "Terminé" : "En cours"}
            </div>
          </div>
          <div className="tags flex self-start flex-wrap">
            {selectedProject?.tags.map((tag) => {
              return <Tag className="" key={tag} label={tag} />;
            })}
          </div>
          <div className="project-details flex flex-col grow overflow-y-auto">
            <div className="project-summary ">
              <p className="italic">{selectedProject?.summary}</p>
            </div>
            <div className="project-description">
              <h4 className="text-hibiscus-600">Présentation du projet</h4>
              <p className="text-content text-md font-light">{selectedProject?.description}</p>
            </div>
            <div className="tasks-list">
              <h4 className="text-hibiscus-600">Tâches prises en charge</h4>
              <ul>
                {selectedProject?.tasks.map((task) => {
                  return <li key={selectedProject.id}>•&nbsp;{task}</li>;
                })}
              </ul>
            </div>
          </div>

          {selectedProject?.deploymentUrl ? (
            <div
              className="project-element-footer flex h-[15%] justify-evenly
             items-center"
            >
              <Button
                type="button"
                size="md"
                variant="outline"
                className="max-sm:w-[120px]"
                icon={<ExternalLink className="ml-2 max-sm:hidden" />}
                href={selectedProject?.githubUrl}
              >
                Code source
              </Button>

              <Button
                type="button"
                size="md"
                variant="outline"
                className="max-sm:w-[120px]"
                icon={<ExternalLink className="ml-2 max-sm:hidden" />}
                href={selectedProject?.deploymentUrl}
              >
                Voir le site
              </Button>
            </div>
          ) : (
            <div className="project-element-footer flex h-[15%] justify-center items-center">
              <Button
                type="button"
                size="md"
                variant="outline"
                className="max-sm:w-[120px]"
                icon={<ExternalLink className="ml-2 max-sm:hidden" />}
                href={selectedProject?.githubUrl}
              >
                Code source
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
