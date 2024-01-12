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

export const ArrowUp = ({ scale = 1, ...props }: Props) => {
  const style = pickViewStyleProps(props);
  return (
    <Svg
      width={8 * scale}
      height={12 * scale}
      viewBox="0 0 8 12"
      fill={Colors.gray100}
      {...style}
    >
      <Path d="M.103.96c0-.299.243-.542.543-.542h6.512a.543.543 0 110 1.086H.646A.543.543 0 01.103.96z" />
      <Path d="M3.41 1.663a.543.543 0 01.767 0L7.325 4.81a.543.543 0 01-.768.768l-2.22-2.221v5.202a.543.543 0 01-1.086 0V3.357l-2.222 2.22a.543.543 0 01-.767-.767L3.41 1.663z" />
    </Svg>
  );
};
