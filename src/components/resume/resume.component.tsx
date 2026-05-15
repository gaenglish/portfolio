import React from "react";
import { Card, Flex, Text } from "@uni-design-system/uni-react";
import { Resume } from "./resume.model";
import { ResumeExperience } from "./resume-experience.component";

interface ResumeComponentProps {
  resume: Resume;
}

export const ResumeComponent = ({
  resume,
}: ResumeComponentProps): JSX.Element => {
  const { experience, summary } = resume;

  return (
    <Flex direction="column" style={{ gap: 20 }}>
      <Text role="headline-large" colorToken="on-surface">
        Intro.
      </Text>
      <Card
        cardType="elevated"
        colorToken="surface"
        style={{
          backdropFilter: "blur(5px)",
        }}
      >
        <Text role={"body-1-short"}>{summary}</Text>
      </Card>
      <Text role="headline-large" colorToken="on-surface">
        Experience
      </Text>
      {experience.map((experience, index) => (
        <ResumeExperience experience={experience} key={index} />
      ))}
    </Flex>
  );
};
