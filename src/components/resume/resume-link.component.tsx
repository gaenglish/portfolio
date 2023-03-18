import React from "react";
import { ContactLink } from "./resume.model";

interface ResumeLinkProps {
  link: ContactLink;
}

export const ResumeLink = ({ link }: ResumeLinkProps) => {
  return (
    <div>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.type}
      </a>
    </div>
  );
};
