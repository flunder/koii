import React, { useReducer } from "react";

import { reducer, ACTIONS } from "@koii/reducer";
import { ElementProps } from "@koii/data";
import { Colors, Fonts, Sizes } from "@koii/theme";
import { Box, Button, Diode, Text } from "@koii/components";

interface Props extends ElementProps {
  name: string;
  variant: "numPad" | "transport";
  size?: "small" | "large";
  footer?: boolean;
  additional?: React.ReactNode;
}

const ButtonWithState = ({
  text,
  name,
  flex,
  color,
  defaultState,
  shortName,
  icon,
  hasIndicator,
  variant = "numPad",
  size = "large",
  additional,
}: Props) => {
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

  const [state, dispatch] = useReducer(reducer, {}, () => ({
    [name]: defaultState,
  }));

  const onPress = () => {
    dispatch({ type: ACTIONS.TOGGLE_BUTTON, name: name });
  };

  return (
    <Box flexDirection="column" flex={flex}>
      <Button
        color={color}
        onPress={onPress}
        variant={variant}
        size={size}
        additional={additional}
        name={name}
      >
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
        {hasIndicator && <Diode marginLeft={Sizes[2]} state={state?.[name]} />}
        <Text
          fontSize={9.5}
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
