import React from "react";
import { Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Colors, Sizes } from "@koii/theme";
import { Box, Label } from "@koii/components";
import { InputElements } from "./InputElements";

const Frame = ({ children }: { children: React.ReactNode }) => {
  const HEADER_HEIGHT = 242;
  const FOOTER_HEIGHT = 152.5;

  return (
    <>
      <LinearGradient
        colors={[`${Colors.gray100}55`, `${Colors.gray100}00`]}
        style={{
          width: "100%",
          position: "absolute",
          top: HEADER_HEIGHT,
          bottom: FOOTER_HEIGHT,
        }}
        locations={[0.3, 0.9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <LinearGradient
        colors={[`${Colors.black}33`, `${Colors.black}00`]}
        style={{
          width: "100%",
          position: "absolute",
          top: HEADER_HEIGHT,
          height: 25,
        }}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <Image
        style={{ ...StyleSheet.absoluteFillObject, opacity: 0.5 }}
        source={require("@assets/images/background_overlay.png")}
      />
      <Image
        style={{ width: "100%", height: HEADER_HEIGHT }}
        source={require("@assets/images/header.png")}
      />
      <Label name="koii" />
      {/* <Box>
        <Logo />
      </Box> */}
      <Box flex={1} justifyContent="flex-end" paddingBottom={Sizes[4]}>
        {children}
      </Box>
      <Image
        style={{ width: "100%", height: FOOTER_HEIGHT }}
        source={require("@assets/images/speaker.png")}
      />
    </>
  );
};

const Main = (): JSX.Element => {
  return (
    <Box flex={1} backgroundColor={Colors.gray200}>
      <Frame>
        <InputElements />
      </Frame>
    </Box>
  );
};

export { Main };
