import React, { useRef, useState, useEffect } from "react";
import { ViewStyle } from "react-native";
import { Box, Text } from "@koii/components";
import { Colors, Fonts, Grid, Sizes } from "@koii/theme";
import { pickViewStyleProps } from "@koii/utils";

interface Props extends ViewStyle {}

const Chop = ({ ...props }: Props): JSX.Element => {
  const style = pickViewStyleProps(props);

  return (
    <Box {...style} flex={1} zIndex={-1}>
      <Box
        backgroundColor={Colors.gray100}
        height={28}
        borderRadius={2}
        alignItems="center"
        justifyContent="center"
        opacity={0.9}
      >
        <Text
          color={Colors.gray500}
          fontSize={10}
          fontFamily={Fonts.Regular}
          letterSpacing={0.5}
        >
          CHOP
        </Text>
      </Box>
    </Box>
  );
};

export { Chop };
