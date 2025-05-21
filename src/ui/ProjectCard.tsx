import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { Tag } from "./Tag";

import { useProjectsStore } from "@/store/projectsStore";
import type { ProjectType } from "@/@types/types";

interface ProjectCardProps {
  project: ProjectType;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { setSelectedProject } = useProjectsStore();
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedProject(project);
    navigate(`/projects/${project.slug}`);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      whileHover={{
        rotate: 1.5,
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className="group relative h-[500px] w-[360px] bg-gradient-to-br from-wine-berry-900 to-wine-berry-400 rounded-2xl p-5 space-y-5 shadow-xl overflow-hidden border border-transparent hover:border-grandis-300/40 transition-all duration-300 hover:cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h3 className="">{project.title}</h3>
      </div>

      <div className="relative w-full h-[220px] overflow-hidden rounded-xl">
        <img
          src={project.illustrationUrl}
          alt={project.illustrationAlt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-wrap space-2 pt-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="absolute bottom-5 left-5 right-5">
        <Button type="button" size="lg" className="w-full" onClick={handleClick}>
          En savoir plus →
        </Button>
      </div>
    </motion.div>
  );
}
