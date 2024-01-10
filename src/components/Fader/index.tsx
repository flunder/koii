import React from "react";
import { Image, ViewStyle } from "react-native";

import { FADER_TYPE } from "@koii/data";
import { Box, Text } from "@koii/components";
import { Colors, Grid, Shadow, Sizes } from "@koii/theme";
import { pickViewStyleProps } from "@koii/utils";
import { LinearGradient } from "expo-linear-gradient";

type MergedProps = FADER_TYPE["style"] & ViewStyle;
interface Props extends MergedProps {}

const Fader = ({ flex, ...props }: Props): JSX.Element => {
  const style = pickViewStyleProps(props);

  return (
    <Box flex={flex} {...style} alignSelf="flex-start" width="100%">
      <Box
        marginBottom={Sizes[6]}
        marginTop={Sizes[2]}
        flex={1}
        alignItems="center"
      >
        <Box
          width="75%"
          backgroundColor="#656060"
          height={1}
          position="absolute"
          top="50%"
          left="12.5%"
        />
        <LinearGradient
          colors={[`${Colors.white}BB`, `${Colors.black}15`]}
          style={{
            flex: 1,
            padding: 1,
            borderRadius: 100,
          }}
          locations={[0, 0.2]}
        >
          <Box
            flex={1}
            backgroundColor={Colors.black}
            borderRadius={100}
            width={8}
          ></Box>
        </LinearGradient>
        <Box
          width={29}
          height={29}
          borderRadius={100}
          backgroundColor={Colors.gray400}
          position="absolute"
          top="40%"
          {...Shadow.default}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            source={require("@assets/images/knob_top_overlay.png")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export { Fader };
