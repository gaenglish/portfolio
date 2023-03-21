import React, { PropsWithChildren } from "react";
import { Flex, useLayout, useTheme } from "@uni-design-system/uni-react";

export const Page = ({ children }: PropsWithChildren) => {
  const { containers } = useTheme();
  const { deviceSize } = useLayout();

  const horizontalPadding = containers.screen.horizontalPadding
    ? containers.screen.horizontalPadding[deviceSize]
    : 30;

  const gap = containers.screen.contentSpacing
    ? containers.screen.contentSpacing[deviceSize]
    : 16;

  return (
    <Flex
      direction="column"
      grow={1}
      style={{
        padding: `${gap + 50}px ${horizontalPadding}px`,
        height: "100% ",
      }}
    >
      <Flex
        direction="column"
        style={{
          maxWidth: 680,
          marginLeft: "auto",
          marginRight: "auto",
          gap,
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};
