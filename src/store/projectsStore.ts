import type { ProjectType } from "@/@types/types";
import { create } from "zustand";
import projectsData from "../data/projects.json";

type ProjectsState = {
  projects: ProjectType[];
  selectedProject: ProjectType | null;
  fetchProjects: () => Promise<void>;
  setSelectedProject: (project: ProjectType | null) => void;
};

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: [],
  selectedProject: null,
  fetchProjects: async () => {
    set({
      projects: projectsData,
    });
  },
  setSelectedProject: (project) => set({ selectedProject: project }),
}));
