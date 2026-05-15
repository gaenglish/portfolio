import React from "react";
import { Page } from "../components/layout/Page";
import { ResumeComponent } from "../components/resume/resume.component";
import { GeorgeEnglishResume } from "../data/GeorgeEnglishResume";

export const Resume = () => {
  return (
    <Page>
      <ResumeComponent resume={GeorgeEnglishResume} />
    </Page>
  );
};
