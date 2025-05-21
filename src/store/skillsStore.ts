import { create } from "zustand";
import type { SkillType } from "@/@types/types";
import skillsData from "../data/skills.json";

type SkillsState = {
  skills: SkillType[] | null;
  fetchSkills: () => Promise<void>;
};

export const useSkillsStore = create<SkillsState>((set) => ({
  skills: [],
  fetchSkills: async () => {
    set({
      skills: skillsData as SkillType[],
    });
  },
}));
