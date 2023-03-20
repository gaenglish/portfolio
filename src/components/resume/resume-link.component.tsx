import React from "react";
import { ContactLink } from "./resume.model";
import { useTheme } from "@uni-design-system/uni-react";

interface ResumeLinkProps {
  link: ContactLink;
}

export const ResumeLink = ({ link }: ResumeLinkProps) => {
  const { colors } = useTheme();

  return (
    <div>
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        style={{ color: colors["on-surface"] }}
      >
        {link.type}
      </a>
    </div>
  );
};
