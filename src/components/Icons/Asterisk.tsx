// @ts-nocheck
import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Colors } from "@koii/theme";
import { pickViewStyleProps } from "@koii/utils";

type BaseProps = SvgProps & ViewStyle;
interface Props extends BaseProps {
  scale?: number;
}

export const Asterisk = ({ scale = 1, ...props }: Props) => {
  const style = pickViewStyleProps(props);
  return (
    <Svg
      width={10 * scale}
      height={11 * scale}
      viewBox="0 0 10 11"
      fill="none"
      stroke={Colors.gray100}
      strokeLinecap="round"
      {...style}
    >
      <Path d="M4.902 1.254v9m3.897-6.75l-7.794 4.5m7.794 0l-7.794-4.5" />
    </Svg>
  );
};
