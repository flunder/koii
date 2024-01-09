import React from "react";
import { Image, StyleSheet } from "react-native";
import { Box } from "@koii/components";
import { Colors } from "@koii/theme";
import { InputElements } from "./InputElements";
import { LinearGradient } from "expo-linear-gradient";

const Main = (): JSX.Element => {
  return (
    <Box
      flex={1}
      backgroundColor={Colors.gray200}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("@assets/images/background_overlay.png")}
      />
      <LinearGradient
        colors={[`${Colors.white}33`, `${Colors.black}11`]}
        style={StyleSheet.absoluteFillObject}
        locations={[0.3, 0.9]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      <InputElements />
    </Box>
  );
};

export { Main };
