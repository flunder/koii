import React from "react";

import { Grid } from "@koii/theme";
import { Box, ButtonWithState, Fader, Knob } from "@koii/components";
import { LAYOUT, ELEMENTS, ELEMENT_TYPES, ElementProps } from "@koii/data";

const Component = ({ name, type, style }: ElementProps) => {
  switch (type) {
    case ELEMENT_TYPES.KNOB:
      return <Knob {...style} />;
    case ELEMENT_TYPES.FADER:
      return <Fader {...style} />;
    case ELEMENT_TYPES.BUTTON_SMALL:
      return <ButtonWithState size="small" name={name} {...style} />;
    case ELEMENT_TYPES.BUTTON_LARGE:
      return <ButtonWithState size="large" name={name} {...style} />;
    default:
      return null;
  }
};

const InputElements = () => (
  <Box height={335} flexDirection="row" paddingHorizontal={Grid.gutter_width}>
    {LAYOUT.map((col, i) => (
      <Box key={i} flex={1} alignItems="center">
        {col.map((row) => (
          /* @ts-expect-error */
          <Component key={row} name={row} {...ELEMENTS[row]} />
        ))}
      </Box>
    ))}
  </Box>
);

export { InputElements };
