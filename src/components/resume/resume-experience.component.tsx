import React from "react";
import { Flex, Text } from "@uni-design-system/uni-react";
import { Experience } from "./resume.model";

interface ResumeExperienceProps {
  experience: Experience;
}

export const ResumeExperience = ({ experience }: ResumeExperienceProps) => {
  return (
    <>
      <Flex align="space-between" style={{ width: "100%" }}>
        <Flex grow={1} direction="column">
          <Text role="title-large">{experience.companyName}</Text>
          <Text role="title-medium">{experience.jobTitle}</Text>
        </Flex>
        <div style={{ width: "200px", textAlign: "center" }}>
          <Text role="title-large">
            {experience.startDate} - {experience.endDate}
          </Text>
        </div>
      </Flex>
      <ul>
        {experience.responsibilities.map((responsibility) => (
          <li>
            <Text role="body-1-long">{responsibility.description}</Text>
          </li>
        ))}
      </ul>
    </>
  );
};
