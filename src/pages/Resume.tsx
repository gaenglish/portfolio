import React from "react";
import { Page } from "../components/layout/Page";
import { Text } from "@uni-design-system/uni-react";
import { ResumeComponent } from "../components/resume/resume.component";
import { GeorgeEnglishResume } from "../data/GeorgeEnglishResume";

export const Resume = () => {
  return (
    <Page>
      <Text role="headline-large" color="on-surface">
        Experience
      </Text>

      <ResumeComponent resume={GeorgeEnglishResume} />
    </Page>
  );
};
