export interface Branch {
  name: string;
  address: string;
  phones: string[];
  email: string;
}

export interface SocialLinks {
  facebook?: string;
  zalo?: string;
  youtube?: string;
}

export interface Company {
  name: string;
  shortName: string;
  slogan: string;
  description: string;
  email: string;
  website: string;
  workingHours: string;
  headquarter: Branch;
  branches: Branch[];
  social: SocialLinks;
}

export interface Stat {
  value: string;
  label: string;
  icon?: string;
}
