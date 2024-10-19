export type Projecttype = {
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
};

export type Skilltype = {
  id: number;
  name: string;
  alt: string;
  "icon-mapping": string;
  type: string;
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

export type MilestoneData = {
  id: number;
  isEducation: "true" | "false";
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
