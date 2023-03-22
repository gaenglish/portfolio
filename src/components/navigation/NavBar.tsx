import React, { useMemo } from "react";
import {
  Button,
  Card,
  Flex,
  Slide,
  Text,
  useLayout,
  useTheme,
  useToggle,
} from "@uni-design-system/uni-react";
import { ResumeLink } from "../resume/resume-link.component";
import { GeorgeEnglishResume } from "../../data/GeorgeEnglishResume";

export const NavBar = () => {
  const { colors } = useTheme();
  const { deviceSize } = useLayout();
  const { contact } = GeorgeEnglishResume;

  const mobile = useMemo(
    () => ["sm", "xs", "md"].includes(deviceSize),
    [deviceSize]
  );

  const [open, { toggle }] = useToggle(false);

  const ContactInfo = () => {
    return (
      <>
        <Text role="headline-large" color="on-surface">
          {contact.firstName} {contact.lastName}
        </Text>

        <a
          href={`mailto:${contact.email}`}
          style={{ color: colors["on-surface"] }}
        >
          {contact.email}
        </a>

        {contact.links?.map((link) => (
          <ResumeLink link={link} />
        ))}
      </>
    );
  };

  return (
    <>
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
        <Flex
          gap="20"
          style={{ minHeight: 50, paddingLeft: 20, paddingRight: 10 }}
        >
          {!mobile ? (
            <Flex gap={20} align="center" grow={1}>
              <ContactInfo />
            </Flex>
          ) : (
            <Flex justify="space-between" align="center" grow={1}>
              <Text role="headline-large" color="on-surface">
                GE
              </Text>
              <Button
                iconName="bars3"
                buttonType="icon"
                contentColor="on-surface"
                onClick={toggle}
              />
            </Flex>
          )}
        </Flex>
      </div>

      <Slide
        in={open}
        style={{
          maxWidth: 400,
          padding: 0,
          zIndex: 3,
        }}
      >
        <Card
          height="100%"
          borderRadius="none"
          elevation="modal"
          style={{ backgroundColor: colors.background }}
        >
          <Button
            buttonType="icon"
            iconName="xMark"
            onClick={toggle}
            contentColor="on-surface"
          />

          <Flex direction="column" justify="center" gap={12} align="center">
            <ContactInfo />
          </Flex>
        </Card>
      </Slide>
    </>
  );
};
