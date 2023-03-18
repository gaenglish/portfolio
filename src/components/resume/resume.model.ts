import { IconName } from "@uni-design-system/uni-react";

export type LinkType =
  | "LinkedIn"
  | "GitHub"
  | "Facebook"
  | "Dribbble"
  | "Behance"
  | "PortfolioBox";

export type TechnologyTagType =
  | "SQL"
  | "Node.js"
  | ".Net"
  | "React"
  | "ReactNative"
  | "Angular"
  | "PHP"
  | "C#"
  | "TypeScript"
  | "JavaScript"
  | "Java"
  | "CSS"
  | "HTML"
  | "Bootstrap";

export interface ContactLink {
  type: LinkType;
  url: string;
}

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  personalUrl?: string;
  links?: ContactLink[];
}

interface Responsibilities {
  description: string;
}

export interface Experience {
  companyName: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  responsibilities: Responsibilities[];
}

interface Education {
  schoolName: string;
  startDate: string;
  endDate: string;
  concentration: string;
  summary: string;
}

export interface Resume {
  contact: Contact;
  summary: string;
  experience: Experience[];
  education: Education[];
}
