import { IconName } from "@uni-design-system/uni-react";

type LinkType =
  | "LinkedIn"
  | "GitHub"
  | "Facebook"
  | "Dribbble"
  | "Behance"
  | "PortfolioBox";

type TechnologyTagType =
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

interface Link {
  type: LinkType;
  url: string;
  iconName: IconName;
}

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
  personalUrl: string;
  links: Link[];
}

interface Responsibilities {
  description: string;
}

interface Experience {
  companyName: string;
  startDate: Date;
  endDate: Date;
  jobTitle: string;
  responsibilities: Responsibilities[];
}

interface Education {
  schoolName: string;
  startDate: Date;
  endDate: Date;
  concentration: string;
  summary: string;
}

export interface Resume {
  contact: Contact;
  summary: string;
  experience: Experience[];
  education: Education[];
}
