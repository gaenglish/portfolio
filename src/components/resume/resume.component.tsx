import React from "react";
import { Flex } from "@uni-design-system/uni-react";
import { Resume } from "./resume.model";
import { ResumeExperience } from "./resume-experience.component";

interface ResumeComponentProps {
  resume: Resume;
}

export const ResumeComponent = ({
  resume,
}: ResumeComponentProps): JSX.Element => {
  const { experience } = resume;

  return (
    <Flex direction="column" style={{ gap: 20 }}>
      {experience.map((experience) => (
        <ResumeExperience experience={experience} />
      ))}
    </Flex>
  );
};
