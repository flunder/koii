import React from "react";
import Animated, {
  useSharedValue,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Image, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import { Box } from "@koii/components";
import { FADER_TYPE } from "@koii/data";
import { Colors, Shadow, Sizes } from "@koii/theme";
import { pickViewStyleProps, useComponentSize } from "@koii/utils";

type MergedProps = FADER_TYPE["style"] & ViewStyle;
interface Props extends MergedProps {}

const MidLine = () => (
  <Box
    width="75%"
    backgroundColor="#656060"
    height={1}
    position="absolute"
    top="50%"
    left="12.5%"
  />
);

const Track = () => (
  <LinearGradient
    colors={[`${Colors.white}BB`, `${Colors.black}15`]}
    style={{
      flex: 1,
      padding: 1,
      borderRadius: 100,
    }}
    locations={[0, 0.2]}
  >
    <Box flex={1} backgroundColor={Colors.black} borderRadius={100} width={8} />
  </LinearGradient>
);

const Handle = ({ offsetY }: { offsetY: SharedValue<number> }) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offsetY.value }],
    };
  });

  return (
    <Box position="absolute">
      <Animated.View style={{ ...animatedStyle }}>
        <Box
          width={29}
          height={29}
          borderRadius={100}
          backgroundColor="#6D6666"
          {...Shadow.default}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("@assets/images/knob_top_overlay.png")}
          />
        </Box>
      </Animated.View>
    </Box>
  );
};

const DRAG_RESISTANCE = 3;

const Fader = ({ flex, ...props }: Props): JSX.Element => {
  const style = pickViewStyleProps(props);
  const offsetY = useSharedValue(0);
  const prevOffsetY = useSharedValue(0);
  const [size, onLayout] = useComponentSize();

  const pan = Gesture.Pan()
    .onStart(() => {
      prevOffsetY.value = offsetY.value;
    })
    .onUpdate((event) => {
      if (!size?.height) return;
      offsetY.value = event.translationY / DRAG_RESISTANCE + prevOffsetY.value;
      // Restrict movement
      offsetY.value = Math.max(offsetY.value, -5);
      offsetY.value = Math.min(offsetY.value, size.height - 25);
    });

  return (
    <Box flex={flex} alignSelf="flex-start" width="100%" {...style}>
      <Box
        flex={1}
        marginTop={Sizes[2]}
        alignItems="center"
        marginBottom={Sizes[7]}
        onLayout={onLayout}
      >
        <MidLine />
        <Track />
        <GestureDetector gesture={pan}>
          <Handle offsetY={offsetY} />
        </GestureDetector>
      </Box>
    </Box>
  );
};

export { Fader };
