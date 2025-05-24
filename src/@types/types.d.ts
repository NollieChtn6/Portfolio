import type { iconMapping } from "@/assets/skills_icons/iconMapping";

export type ProjectType = {
  id: number;
  title: string;
  isComplete: boolean;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  tasks: string[];
  githubUrl: string;
  deploymentUrl: string;
  illustrationUrl: string;
  illustrationAlt: string;
  sandbox: boolean;
};

export type SkillType = {
  id: number;
  name: string;
  type: "front" | "back" | "outil" | "soft-skill" | "database";
  "icon-mapping": keyof typeof iconMapping;
  alt: string;
};

export type PositionDescription = {
  id: number;
  title: string;
  tasks: string[];
};

export type MilestoneDetails = {
  positionType: string;
  diploma?: string;
  yearOfGraduation?: number;
  positionDescription: PositionDescription[];
};

export type MilestoneType = {
  id: number;
  isEducation: boolean;
  fr: {
    startMonth: string;
    startYear: number;
    endMonth: string;
    endYear: number;
    organisation: string;
    city: string;
    zipcode: number;
    position: string;
    details: MilestoneDetails;
  };
  en: {
    startMonth: string;
    startYear: number;
    endMonth: string;
    endYear: number;
    organisation: string;
    city: string;
    zipcode: number;
    position: string;
    details: MilestoneDetails;
  };
};
