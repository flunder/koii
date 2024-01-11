import React from "react";

import { Colors } from "@koii/theme";
import { Box } from "@koii/components";
import { Frame } from "./Frame";
import { InputElements } from "./InputElements";

const Main = (): JSX.Element => {
  return (
    <Box flex={1} backgroundColor={Colors.gray200}>
      <Frame>
        <InputElements />
      </Frame>
    </Box>
  );
};

export { Main };
