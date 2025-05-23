import { motion } from "framer-motion";
import { useState } from "react";

import { PageTitle } from "@/ui/PageTitle";
import { ProjectCard } from "@/ui/ProjectCard";
import { Switch } from "@/ui/Switch";

import { useProjectsStore } from "../store/projectsStore";

export function Projects() {
  const { projects } = useProjectsStore();
  const sandboxProjects = projects.filter((sandboxProject) => sandboxProject.sandbox === true);
  const [displaySandboxOnly, setDisplaySandboxOnly] = useState<boolean>(false);
  const displayedProjects = (displaySandboxOnly ? sandboxProjects : projects).slice().reverse();

  return (
    <main className="projects-container flex flex-col md:flex-row h-full overflow-hidden">
      <PageTitle title="Projets" />

      <div className="projects-content flex flex-col w-full h-full p-3 items-center space-y-6 overflow-hidden">
        <div className="w-full h-[50px] px-3">
          <div className="flex items-center space-x-2 h-full justify-end">
            <Switch
              checked={displaySandboxOnly}
              onChange={setDisplaySandboxOnly}
              label="Afficher uniquement les projets dans la sandbox"
            />
          </div>
        </div>

        <div className="projects-list w-full flex justify-center overflow-y-auto py-6 overflow-x-hidden px-0 sm:px-6">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-9 w-full max-w-[1200px]">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
