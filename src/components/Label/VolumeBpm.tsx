import React from "react";
import { ViewStyle } from "react-native";

import { Box, Text } from "@koii/components";
import { Colors, Grid, Sizes } from "@koii/theme";
import { pickViewStyleProps, viewPort } from "@koii/utils";

const VolumeBpm = (props: ViewStyle) => {
  const style = pickViewStyleProps(props);

  return (
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
};

export { VolumeBpm };
