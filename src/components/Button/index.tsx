import React from "react";
import { Image, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Sizes } from "@koii/theme";
import { Box, Touchable } from "@koii/components";
import { pickViewStyleProps } from "@koii/utils";

export type color = "primary" | "gray300" | "gray400" | "black";

interface Props extends ViewStyle {
  onPress: () => void;
  color?: color;
  children?: React.ReactNode;
  variant: "numPad" | "transport";
}

const Button = ({
  onPress,
  children,
  color = "primary",
  variant = "numPad",
  ...props
}: Props): JSX.Element => {
  const style = pickViewStyleProps(props);

  const colorProps = {
    primary: [Colors.primary, Colors.primary],
    gray300: [Colors.gray300, Colors.gray300],
    gray400: [Colors.gray400, Colors.gray400],
    black: [Colors.gray500, "#0a0a0a"],
  }[color];

  const paddingHorizontal = {
    numPad: Sizes[2],
    transport: 0,
  }[variant];

  const Socket = ({ children }: { children: React.ReactNode }) => (
    <Box
      height={56}
      width={56}
      backgroundColor={Colors.black}
      shadowColor="black"
      shadowOffset={{ width: 5, height: 5 }}
      shadowOpacity={0.7}
      shadowRadius={6}
      elevation={5}
      {...style}
    >
      <LinearGradient
        colors={[`${Colors.white}BB`, `${Colors.black}15`]}
        style={{ flex: 1, padding: 1, borderRadius: 1 }}
        locations={[0, 0.15]}
      >
        <Box backgroundColor={Colors.black} width="100%" height="100%">
          {children}
        </Box>
      </LinearGradient>
    </Box>
  );

  const Base = ({ children }: { children: React.ReactNode }) => (
    <Touchable flex={1} margin={2} borderRadius={2.5} onPress={onPress}>
      <LinearGradient
        colors={colorProps}
        style={{ flex: 1 }}
        locations={[0, 1]}
        start={{ x: 0.3, y: 0.3 }}
        end={{ x: 1.2, y: 1.2 }}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("@assets/images/button_large_overlay.png")}
        />
        <Box
          position="absolute"
          paddingVertical={4}
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
    <Socket>
      <Base>{children}</Base>
    </Socket>
  );

  return <ButtonBase>{children}</ButtonBase>;
};

export { Button };
