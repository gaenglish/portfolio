import React from "react";
import { Card, Flex, Text } from "@uni-design-system/uni-react";
import { Experience } from "./resume.model";
import { Tag } from "../tag/tag.component";

interface ResumeExperienceProps {
  experience: Experience;
}

export const ResumeExperience = ({ experience }: ResumeExperienceProps) => {
  return (
    <Card
      cardType="elevated"
      colorToken="surface"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <Flex align="space-between" wrap="wrap">
        <Flex grow={1} direction="column">
          <Text role="title-large">{experience.companyName}</Text>
          <Text role="title-medium">{experience.jobTitle}</Text>
        </Flex>
        <Text role="title-large">
          {experience.startDate} - {experience.endDate}
        </Text>
      </Flex>
      <p>
        {experience.summary}
      </p>
      <Text role="title-large">Contributions</Text>
      <ul style={{ paddingLeft: 16 }}>
        {experience.responsibilities.map((responsibility, index) => (
          <li style={{ paddingBottom: "10px" }} key={index}>
            <Text role="body-1-short">{responsibility.description}</Text>
            {responsibility.tags?.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </li>
        ))}
      </ul>
    </Card>
  );
};
