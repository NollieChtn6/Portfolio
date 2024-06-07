export interface ProjectInterface {
  id: number;
  title: string;
  slug: string;
  summary: string;
  description: string;
  tags: string[];
  githubUrl: string;
  deploymentUrl: string;
  illustrationUrl: string;
  illustrationAlt: string;
  sandbox: boolean;
}

export interface SkillInterface {
  id: number;
  name: string;
  alt: string;
  'icon-mapping': string;
  type: string;
}

export interface MilestoneDetailsInterface {
  positionType: string;
  positionDescription: string;
}

export interface MilestoneInterface {
  id: number;
  type: string;
  startMonth: string;
  startYear: number;
  endMonth: string;
  endYear: number;
  location: string;
  city: string;
  zipcode: number;
  position: string;
  diploma: string;
  yearOfGraduation: string;
  details: MilestoneDetailsInterface;
}
