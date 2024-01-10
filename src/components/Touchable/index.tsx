import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

import { pickViewStyleProps } from "@koii/utils";

export const defaultProps = {
  activeOpacity: 0.85,
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
};

export interface Props extends TouchableOpacityProps, ViewStyle {
  children?: ReactNode;
  as?: React.ComponentType;
}

export const Touchable = ({ children, as, ...props }: Props): JSX.Element => {
  const style = pickViewStyleProps(props);
  const Component = as ?? TouchableOpacity;
  return (
    <Component {...defaultProps} style={style} {...props}>
      {children}
    </Component>
  );
};
