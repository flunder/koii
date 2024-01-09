import React from "react";
import { Box, Button, Diode, Text } from "@koii/components";
import { Colors, Fonts, Sizes } from "@koii/theme";
import { ElementProps } from "@koii/data";

interface Props extends ElementProps {
  footer?: boolean;
  variant: "numPad" | "transport";
  size?: "small" | "large";
}

const ButtonWithState = ({
  text,
  flex,
  color,
  defaultState,
  shortName,
  icon,
  hasIndicator,
  variant = "numPad",
  size = "large",
}: Props) => {
  const onPress = () => {};

  const fontSize = {
    small: 10.5,
    large: variant === "numPad" ? 16 : 10.5,
  }[size];

  const textAlign = {
    small: "center" as "center",
    large:
      variant === "numPad"
        ? ("flex-start" as "flex-start")
        : ("center" as "center"),
  }[size];

  return (
    <Box flexDirection="column" flex={flex}>
      <Button color={color} onPress={onPress} variant={variant} size={size}>
        <Text
          color={Colors.white}
          fontSize={fontSize}
          marginBottom={3}
          alignSelf={textAlign}
          opacity={0.7}
        >
          {text}
        </Text>
        {icon}
      </Button>
      <Box marginTop={Sizes[1]} flexDirection="row" alignItems="center">
        {hasIndicator && (
          <Diode marginLeft={Sizes[2]} state={defaultState ? "on" : "off"} />
        )}
        <Text
          fontSize={9}
          marginLeft={Sizes[2]}
          fontFamily={Fonts.Regular}
          opacity={0.8}
        >
          {shortName}
        </Text>
      </Box>
    </Box>
  );
};

export { ButtonWithState };
