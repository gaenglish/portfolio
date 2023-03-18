import React from "react";
import { Flex, Text } from "@uni-design-system/uni-react";
import { Resume } from "./resume.model";
import { ResumeLink } from "./resume-link.component";
import { ResumeExperience } from "./resume-experience.component";

interface ResumeComponentProps {
  resume: Resume;
}

export const ResumeComponent = ({
  resume,
}: ResumeComponentProps): JSX.Element => {
  const { contact, summary, experience, education } = resume;

  return (
    <Flex direction="column">
      <Text role="headline-large">
        {contact.firstName} {contact.lastName}
      </Text>

      <a href={`mailto:${contact.email}`}>{contact.email}</a>

      <Flex
        justify="space-between"
        style={{ width: "120px", margin: "10px 0" }}
      >
        {contact.links?.map((link) => (
          <ResumeLink link={link} />
        ))}
      </Flex>

      {experience.map((experience) => (
        <ResumeExperience experience={experience} />
      ))}
    </Flex>
  );
};
