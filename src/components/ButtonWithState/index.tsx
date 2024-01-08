import React from "react";
import { FlexAlignType } from "react-native";
import { Box, Button, Diode, Text } from "@koii/components";
import { Colors, Sizes } from "@koii/theme";
import { ElementProps } from "@koii/data";

interface Props extends ElementProps {
  footer?: boolean;
  variant: "numPad" | "transport";
}

const ButtonWithState = ({
  text,
  flex,
  color,
  defaultState,
  shortName,
  icon,
  variant = "numPad",
  hasIndicator,
}: Props) => {
  const onPress = () => {};

  const fontSize = {
    numPad: 16,
    transport: 10.5,
  }[variant];

  const textAlign: FlexAlignType = {
    numPad: "flex-start" as "flex-start", // as? https://stackoverflow.com/a/43124412/249894
    transport: "center" as "center",
  }[variant];

  return (
    <Box flexDirection="column" flex={flex}>
      <Button color={color} onPress={onPress} variant={variant}>
        <Text
          color={Colors.white}
          fontSize={fontSize}
          marginBottom={3}
          alignSelf={textAlign}
        >
          {text}
        </Text>
        {icon}
      </Button>
      <Box marginTop={Sizes[1]} flexDirection="row" alignItems="center">
        {hasIndicator && (
          <Diode marginLeft={Sizes[2]} state={defaultState ? "on" : "off"} />
        )}
        <Text fontSize={10} marginLeft={Sizes[2]}>
          {shortName}
        </Text>
      </Box>
    </Box>
  );
};

export { ButtonWithState };
