import React from "react";
import { Image, ViewStyle } from "react-native";

import { Box } from "@koii/components";
import { KNOB_TYPE } from "@koii/data";
import { Colors, Shadow } from "@koii/theme";
import { pickViewStyleProps } from "@koii/utils";

export type color = "primary" | "gray100";

type MergedProps = KNOB_TYPE["style"] & ViewStyle;
interface Props extends MergedProps {}

const Knob = ({
  flex,
  additional,
  color = "gray100",
  ...props
}: Props): JSX.Element => {
  const style = pickViewStyleProps(props);

  return (
    <>
      <Box flex={flex} {...style}>
        <Box
          width={54}
          height={54}
          borderRadius={100}
          backgroundColor={Colors?.[color]}
          alignItems="center"
          justifyContent="center"
          {...Shadow.default}
        >
          <Image
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              opacity: 0.2,
            }}
            source={require("@assets/images/knob_bottom_overlay.png")}
          />
          <Box
            width={29}
            height={29}
            borderRadius={100}
            backgroundColor={Colors?.[color]}
            {...Shadow.default}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                opacity: 0.5,
              }}
              source={require("@assets/images/knob_top_overlay.png")}
            />
          </Box>
        </Box>
      </Box>
      {additional}
    </>
  );
};

export { Knob };
