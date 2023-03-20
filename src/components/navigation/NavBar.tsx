import React from "react";
import { Flex, Text, useTheme } from "@uni-design-system/uni-react";
import { ResumeLink } from "../resume/resume-link.component";
import { GeorgeEnglishResume } from "../../data/GeorgeEnglishResume";

export const NavBar = () => {
  const { colors } = useTheme();
  const { contact } = GeorgeEnglishResume;

  return (
    <div
      style={{
        borderBottom: `1px solid ${colors.outline}`,
        height: 50,
        backdropFilter: "blur(2px)",
        backgroundColor: colors.surface,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 2,
      }}
    >
      <Flex align="center" style={{ minHeight: 50, paddingLeft: 20, gap: 20 }}>
        <Text role="headline-large" color="on-surface">
          {contact.firstName} {contact.lastName}
        </Text>

        <a
          href={`mailto:${contact.email}`}
          style={{ color: colors["on-surface"] }}
        >
          {contact.email}
        </a>

        <Flex justify="space-between" style={{ width: "120px", gap: 20 }}>
          {contact.links?.map((link) => (
            <ResumeLink link={link} />
          ))}
        </Flex>
      </Flex>
    </div>
  );
};
