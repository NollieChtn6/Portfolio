import type { MilestoneType } from "@/@types/types";
import { create } from "zustand";
import milestonesData from "../data/milestones.json";

type MilestonesState = {
  milestones: MilestoneType[];
  selectedMilestone: MilestoneType | null;
  fetchMilestones: () => Promise<void>;
  setSelectedMilestone: (milestones: MilestoneType | null) => void;
};

export const useMilestonesStore = create<MilestonesState>((set) => ({
  milestones: [],
  selectedMilestone: null,
  fetchMilestones: async () => {
    set({
      milestones: milestonesData as MilestoneType[],
    });
  },
  setSelectedMilestone: (milestone) =>
    set({ selectedMilestone: milestone as MilestoneType | null }),
}));
