import React from "react";
import { Image, ViewStyle } from "react-native";
import { Box } from "@koii/components";
import { pickViewStyleProps } from "@koii/utils";

interface Props extends ViewStyle {
  name: "gain";
}

const Label = ({ name, ...props }: Props): JSX.Element | null => {
  const style = pickViewStyleProps(props);

  switch (name) {
    case "gain":
      return <Gain style={style} />;
    default:
      return null;
  }
};

const Gain = ({ style }: { style: ViewStyle }) => (
  <Box
    width={200}
    height={100}
    position="absolute"
    left={-3}
    top={25}
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

export { Label };
