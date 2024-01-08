import React from "react";
import { Image } from "react-native";
import { Box, Button, ButtonWithState, Diode, Text } from "@koii/components";
import { Colors, Grid, Sizes } from "@koii/theme";
import { LAYOUT, ELEMENTS, ELEMENT_TYPES, ElementProps } from "@koii/data";

const Component = ({ type, style }: ElementProps) => {
  switch (type) {
    case ELEMENT_TYPES.KNOB:
      return <Box borderWidth={0.2} flex={style.flex}></Box>;
    case ELEMENT_TYPES.FADER:
      return <Box borderWidth={0.2} flex={style.flex}></Box>;
    case ELEMENT_TYPES.BUTTON_SMALL:
      return <Box borderWidth={0.2} flex={style.flex}></Box>;
    case ELEMENT_TYPES.BUTTON_LARGE:
      return <ButtonWithState {...style} />;
    default:
      break;
  }
};

const InputElements = () => {
  return (
    <Box
      width="100%"
      height={320}
      flexDirection="row"
      paddingHorizontal={Grid.gutter_width}
    >
      {LAYOUT.map((col) => {
        return (
          <Box flex={1}>
            {col.map((row) => {
              return <Component key={row} {...ELEMENTS?.[row]} />;
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export { InputElements };
