import React, { PropsWithChildren } from "react";
import { Flex } from "@uni-design-system/uni-react";

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      direction="column"
      style={{
        padding: "70px 30px",
        height: "100% ",
        flexGrow: 1,
      }}
    >
      <Flex
        direction="column"
        style={{
          maxWidth: 680,
          marginLeft: "auto",
          marginRight: "auto",
          gap: 16,
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
};
