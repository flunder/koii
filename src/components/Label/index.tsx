import React from "react";
import { Image, ViewStyle } from "react-native";

import { Colors, Grid, Sizes } from "@koii/theme";
import { Box, Logo, Text } from "@koii/components";
import { pickViewStyleProps, viewPort } from "@koii/utils";

interface Props extends ViewStyle {
  name: "volume" | "koii" | "gain";
}

const Label = ({ name, ...props }: Props): JSX.Element | null => {
  const style = pickViewStyleProps(props);

  switch (name) {
    case "gain":
      return <Gain style={style} />;
    case "volume":
      return <Volume style={style} />;
    case "koii":
      return <KOII style={style} />;
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

const Volume = ({ style }: { style: ViewStyle }) => (
  <Box
    top={-25}
    left={-Grid.gutter_width}
    width={viewPort.width}
    position="absolute"
    flexDirection="row"
    justifyContent="space-between"
    paddingHorizontal={Grid.gutter_width}
    opacity={0.8}
    {...style}
  >
    <Text color={Colors.gray500} fontSize={13} paddingLeft={Sizes[3] + 2}>
      VOLUME
    </Text>
    <Text color={Colors.gray500} fontSize={13} paddingRight={Sizes[6] + 2}>
      BPM
    </Text>
  </Box>
);

const KOII = ({ style }: { style: ViewStyle }) => (
  <Box
    left={-Grid.gutter_width}
    width={viewPort.width}
    flexDirection="row"
    justifyContent="space-between"
    paddingHorizontal={Grid.gutter_width}
    paddingTop={Sizes[4]}
    paddingLeft={Sizes[7] + 2}
    paddingRight={Sizes[2]}
    {...style}
  >
    <Box flexDirection="row" alignItems="center">
      <Text color={Colors.gray500} fontSize={13}>
        K.O.II
      </Text>
      <Logo marginLeft={Sizes[2]} />
    </Box>
    <Text color={Colors.gray500} fontSize={13} opacity={0.8}>
      64MB SAMPLE COMPOSER
    </Text>
  </Box>
);

export { Label };
