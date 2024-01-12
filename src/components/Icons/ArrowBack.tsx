// @ts-nocheck
import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

import { Colors } from "@koii/theme";
import { pickViewStyleProps } from "@koii/utils";

type BaseProps = SvgProps & ViewStyle;
interface Props extends BaseProps {
  scale?: number;
}

export const ArrowBack = ({ scale = 1, ...props }: Props) => {
  const style = pickViewStyleProps(props);
  return (
    <Svg
      width={13 * scale}
      height={13 * scale}
      viewBox="0 0 13 13"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={Colors.gray100}
      {...style}
    >
      <Path d="M4.993 5.532L2.106 8.42l2.887 2.886" />
      <Path d="M10.426 5.08V6.38A2.037 2.037 0 018.388 8.42H2.276" />
    </Svg>
  );
};
