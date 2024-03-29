import React from "react";
import { Image, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Box, Touchable } from "@koii/components";
import { pickViewStyleProps } from "@koii/utils";
import { Colors, Sizes, Shadow } from "@koii/theme";

export type buttonColors = "primary" | "gray300" | "gray400" | "black";

const overlayImgSmall = require("@assets/images/button_small_overlay.png");
const overlayImgLarge = require("@assets/images/button_large_overlay.png");

interface Props extends ViewStyle {
  onPress: () => void;
  color?: buttonColors;
  name: string;
  children?: React.ReactNode;
  variant?: "numPad" | "transport";
  size?: "small" | "large";
  additional?: React.ReactNode;
}

const Button = React.memo(
  ({
    onPress,
    children,
    color = "primary",
    variant = "numPad",
    size = "large",
    name,
    additional,
    ...props
  }: Props): JSX.Element => {
    const style = pickViewStyleProps(props);

    const colorProps = {
      primary: [Colors.primary, Colors.primary],
      gray300: [Colors.gray300, Colors.gray300],
      gray400: [Colors.gray400, Colors.gray400],
      black: [Colors.gray500, Colors.black],
    }[color];

    const height = size === "large" ? 56 : 28;

    const paddingHorizontal = {
      numPad: Sizes[2],
      transport: 0,
    }[variant];

    const overlayImage = {
      small: overlayImgSmall,
      large: overlayImgLarge,
    }[size];

    const gradientLocations = {
      small: [0, 0.2],
      large: [0, 0.075],
    }[size];

    const Socket = ({ children }: { children: React.ReactNode }) => (
      <Box
        height={height}
        width={56}
        backgroundColor={Colors.black}
        borderRadius={3}
        {...Shadow.default}
        {...style}
      >
        <LinearGradient
          colors={[`${Colors.white}FF`, `${Colors.black}15`]}
          style={{ flex: 1, padding: 1, borderRadius: 1 }}
          locations={gradientLocations}
        >
          <Box backgroundColor={Colors.black} width="100%" height="100%">
            {children}
          </Box>
        </LinearGradient>
      </Box>
    );

    const Base = ({ children }: { children: React.ReactNode }) => (
      <Touchable flex={1} margin={1} borderRadius={2.5} onPress={onPress}>
        <LinearGradient
          colors={colorProps}
          style={{ flex: 1, borderRadius: 3 }}
          locations={[0, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            source={overlayImage}
          />
          <Box
            position="absolute"
            paddingTop={Sizes[1] + 1}
            paddingHorizontal={paddingHorizontal}
            width="100%"
            height="100%"
          >
            {children}
          </Box>
        </LinearGradient>
      </Touchable>
    );

    const ButtonBase = ({ children }: { children: React.ReactNode }) => (
      <>
        <Socket>
          <Base>{children}</Base>
        </Socket>
        {additional}
      </>
    );

    return <ButtonBase>{children}</ButtonBase>;
  },
  arePropsEqual
);

function arePropsEqual(
  prevProps: Readonly<Props>,
  nextProps: Readonly<Props>
): boolean {
  return true;
  // return (
  //   prevProps.id == nextProps.id &&
  // );
}

export { Button };
