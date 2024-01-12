import React, { useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { reducer, ACTIONS, initialState } from "@koii/reducer";
import { ElementProps } from "@koii/data";
import { Colors, Fonts, Sizes } from "@koii/theme";
import { LOCAL_STORAGE_KEYS } from "@koii/constants";
import { Box, Button, Diode, Text } from "@koii/components";
import { useUpdateButtonState } from "@koii/utils/hooks/useUpdateButtonState";

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
  const { state, onPress } = useUpdateButtonState(name);

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
      <Button
        name={name}
        size={size}
        color={color}
        onPress={onPress}
        variant={variant}
        additional={additional}
      >
        <Text
          opacity={0.7}
          marginBottom={3}
          fontSize={fontSize}
          color={Colors.white}
          alignSelf={textAlign}
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
          opacity={0.6}
        >
          {shortName}
        </Text>
      </Box>
    </Box>
  );
};

export { ButtonWithState };
