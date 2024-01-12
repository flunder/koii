// @ts-nocheck
import * as React from "react";
import { ViewStyle } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";
import { pickViewStyleProps } from "@koii/utils";

type BaseProps = SvgProps & ViewStyle;
interface Props extends BaseProps {
  scale?: number;
}

export const ArrowDown = ({ scale = 1, ...props }: Props) => {
  const style = pickViewStyleProps(props);

  return (
    <Svg
      width={8 * scale}
      height={9 * scale}
      viewBox="0 0 8 9"
      fill="none"
      {...style}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.603 8.196a.529.529 0 01-.529.53H.73a.529.529 0 010-1.058h6.344c.292 0 .529.236.529.528z"
        fill="#DEDCDD"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.381 7.513a.529.529 0 01-.747 0L.567 4.446a.529.529 0 11.748-.747l2.164 2.164V.795a.529.529 0 111.057 0v5.068L6.7 3.699a.529.529 0 01.748.747L4.381 7.513z"
        fill="#DEDCDD"
      />
    </Svg>
  );
};
