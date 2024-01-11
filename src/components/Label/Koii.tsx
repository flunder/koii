import React from "react";
import { Image, ViewStyle } from "react-native";

import { Box, Logo, Text } from "@koii/components";
import { Colors, Grid, Sizes } from "@koii/theme";
import { pickViewStyleProps, viewPort } from "@koii/utils";

const Koii = (props: ViewStyle) => {
  const style = pickViewStyleProps(props);

  return (
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
};

export { Koii };
