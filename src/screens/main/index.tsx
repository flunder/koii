import React from "react";
import { Image } from "react-native";
import { Box } from "@koii/components";
import { Colors } from "@koii/theme";
import { InputElements } from "./InputElements";

const Main = (): JSX.Element => {
  return (
    <Box
      flex={1}
      backgroundColor={Colors.gray200}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("@assets/images/background_overlay.png")}
      />
      <InputElements />
    </Box>
  );
};

export { Main };
