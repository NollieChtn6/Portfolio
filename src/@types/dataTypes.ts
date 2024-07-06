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

export interface PositionDescription {
  id: number;
  title: string;
  tasks: string[];
}

export interface MilestoneDetails {
  positionType: string;
  diploma?: string;
  yearOfGraduation?: number;
  positionDescription: PositionDescription[];
}

export interface MilestoneData {
  id: number;
  isEducation: 'true' | 'false';
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
}
