import React from "react";
import { Grid } from "@koii/theme";
import { Box, ButtonWithState } from "@koii/components";
import { LAYOUT, ELEMENTS, ELEMENT_TYPES, ElementProps } from "@koii/data";

const Component = ({ type, style }: ElementProps) => {
  switch (type) {
    case ELEMENT_TYPES.KNOB:
      return <Box borderWidth={0.2} flex={style.flex}></Box>;
    case ELEMENT_TYPES.FADER:
      return <Box borderWidth={0.2} flex={style.flex}></Box>;
    case ELEMENT_TYPES.BUTTON_SMALL:
      return <ButtonWithState size="small" {...style} />;
    case ELEMENT_TYPES.BUTTON_LARGE:
      return <ButtonWithState size="large" {...style} />;
    default:
      break;
  }
};

const InputElements = () => {
  return (
    <Box
      width="100%"
      height={335}
      flexDirection="row"
      paddingHorizontal={Grid.gutter_width}
    >
      {LAYOUT.map((col) => {
        return (
          <Box flex={1} alignItems="center">
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
