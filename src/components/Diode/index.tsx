import React from "react";
import { Image, ViewStyle } from "react-native";

import { Colors } from "@koii/theme";
import { Box } from "@koii/components";
import { pickViewStyleProps } from "@koii/utils";

interface Props extends ViewStyle {
  state: boolean;
}

const Diode = ({ state, ...props }: Props): JSX.Element => {
  const style = pickViewStyleProps(props);
  return (
    <Box
      width={8}
      height={8}
      backgroundColor={state ? Colors.primary : Colors.gray500}
      borderRadius={100}
      borderWidth={1}
      borderColor={`${Colors.gray500}AA`}
      {...style}
    >
      <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("@assets/images/diode_overlay.png")}
      />
    </Box>
  );
};

export { Diode };
