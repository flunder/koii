import React from "react";
import { Image, ViewStyle } from "react-native";

import { Box } from "@koii/components";
import { pickViewStyleProps } from "@koii/utils";

const Gain = (props: ViewStyle) => {
  const style = pickViewStyleProps(props);

  return (
    <Box
      width={200}
      height={100}
      position="absolute"
      left={-3}
      top={25}
      zIndex={-1}
      {...style}
    >
      <Image
        style={{
          width: 11,
          height: 75,
          position: "absolute",
        }}
        source={require("@assets/images/gain_label.png")}
      />
    </Box>
  );
};

export { Gain };
