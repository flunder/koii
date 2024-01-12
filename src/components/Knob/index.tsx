import React from "react";
import { Image, ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { Box } from "@koii/components";
import { KNOB_TYPE } from "@koii/data";
import { Colors, Shadow } from "@koii/theme";
import { pickViewStyleProps } from "@koii/utils";

export type color = "primary" | "gray100";

type MergedProps = KNOB_TYPE["style"] & ViewStyle;
interface Props extends MergedProps {}

const DRAG_RESISTANCE = 3;

const Knob = ({
  flex,
  additional,
  color = "gray100",
  ...props
}: Props): JSX.Element => {
  const style = pickViewStyleProps(props);
  const offsetY = useSharedValue(0);
  const prevOffsetY = useSharedValue(0);

  const indicatorColor = {
    primary: Colors.gray100,
    gray100: Colors.white,
  }[color];

  const pan = Gesture.Pan()
    .onStart(() => {
      prevOffsetY.value = offsetY.value;
    })
    .onUpdate((event) => {
      offsetY.value = -event.translationY / DRAG_RESISTANCE + prevOffsetY.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: "100%",
      height: "100%",
      position: "absolute",
      justifyContent: "center",
      transform: [{ rotate: `${offsetY.value}deg` }],
    };
  });

  return (
    <>
      <Box flex={flex} {...style}>
        <GestureDetector gesture={pan}>
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
            <Animated.View style={animatedStyle}>
              <Box
                left={9}
                height={10}
                width={10}
                backgroundColor={indicatorColor}
                transform={[{ rotate: "45deg" }]}
                shadowColor="black"
                shadowOffset={{ width: 1, height: 1 }}
                shadowOpacity={0.3}
                shadowRadius={5}
                elevation={5}
              />
            </Animated.View>
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
        </GestureDetector>
      </Box>
      {additional}
    </>
  );
};

export { Knob };
