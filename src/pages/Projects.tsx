import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { PageTitle } from "@/ui/PageTitle";
import { ProjectCard } from "@/ui/ProjectCard";
import { Switch } from "@/ui/Switch";

import { useProjectsStore } from "../store/projectsStore";

export function Projects() {
  const { projects } = useProjectsStore();
  const sandboxProjects = projects.filter((sandboxProject) => sandboxProject.sandbox === true);
  const [displaySandboxOnly, setDisplaySandboxOnly] = useState<boolean>(false);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 40 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -40,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <main className="projects-container flex flex-col md:flex-row h-full overflow-hidden">
      <PageTitle title="Projets" />

      <div className="projects-content flex flex-col w-full h-full p-3 items-center space-y-6 overflow-hidden">
        <div className="w-full h-[50px] px-3">
          <div className="flex items-center space-x-2 h-full justify-end">
            <Switch checked={displaySandboxOnly} onChange={setDisplaySandboxOnly} label="Sandbox" />
          </div>
        </div>

        <div className="projects-list w-full flex justify-center overflow-y-auto py-6 overflow-x-hidden px-0 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={displaySandboxOnly ? "sandbox" : "all"}
              className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-9 w-full max-w-[1200px]"
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              {(displaySandboxOnly ? sandboxProjects : projects)
                .slice()
                .reverse()
                .map((project) => (
                  <motion.div key={project.id} layout variants={cardVariants}>
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
