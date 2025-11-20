import type { iconMapping } from "@/assets/skills_icons/iconMapping";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  githubUrl: string;
  deploymentUrl: string;
  illustrationUrl: string;
  illustrationAlt: string;
}

export type SkillType = {
  id: number;
  name: string;
  type: "front" | "back" | "outil" | "soft-skill" | "database";
  "icon-mapping": keyof typeof iconMapping;
  alt: string;
};

export interface ProfessionalMilestone {
  id: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number | null;
  organisation: string;
  city: string;
  zipcode: number;
  position: string;
  details: ProfessionalMilestoneDetails;
}

export interface ProfessionalMilestoneDetails {
  positionType: string;
  tasks: string[];
}

export interface EducationalMilestone {
  id: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  organisation: string;
  city: string;
  zipcode: number;
  title: string;
  diploma: string;
  yearOfGraduation: number | null;
}
