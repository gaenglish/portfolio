import { TagType } from "../tag/tag.types";

export type LinkType =
  | "LinkedIn"
  | "GitHub"
  | "Facebook"
  | "Dribbble"
  | "Behance"
  | "PortfolioBox";

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

interface Responsibility {
  description: string;
  tags?: TagType[];
}

export interface Experience {
  companyName: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  responsibilities: Responsibility[];
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
