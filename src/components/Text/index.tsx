import React, { ReactNode } from "react";
import { Fonts } from "@koii/theme";
import { TextStyle, Text as TextBase, TextProps } from "react-native";
import { pickTextStyleProps } from "@koii/utils";

interface Props extends TextStyle, TextProps {
  children?: ReactNode;
  allowFontScaling?: boolean;
  numberOfLines?: number;
}

export const Text = ({ children, style, ...props }: Props): JSX.Element => {
  const styleProps = pickTextStyleProps(props);

  return (
    <TextBase
      style={[
        {
          fontFamily: Fonts.Light,
        },
        styleProps,
        style,
      ]}
      {...props}
    >
      {children}
    </TextBase>
  );
};
