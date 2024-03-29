import React, { ReactNode } from "react";
import { Animated, View, ViewStyle } from "react-native";
import { pickViewStyleProps } from "@koii/utils";

export interface BoxProps extends ViewStyle {
  children?: ReactNode;
  transform?: any;
  as?: React.ComponentType;
  pointerEvents?: "box-none" | "none" | "box-only" | "auto";
  onLayout?: (event: any) => void;
}

export interface AnimatedBoxProps {
  children?: ReactNode;
  as?: typeof Animated.View;
  [key: string]: any;
}

export const Box = ({
  children,
  as,
  pointerEvents,
  onLayout,
  ...props
}: BoxProps | AnimatedBoxProps): JSX.Element => {
  const style = pickViewStyleProps(props);
  const Component = as ?? View;
  return (
    <Component style={style} pointerEvents={pointerEvents} onLayout={onLayout}>
      {children}
    </Component>
  );
};
