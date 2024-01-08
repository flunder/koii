import React from "react";
import { Image } from "react-native";
import { Box, Button, Diode, Text } from "@koii/components";
import { Colors, Grid, Sizes } from "@koii/theme";
import { buttons } from "../../data";

const b = { borderWidth: 0.2 };

const Main = (): JSX.Element => {
  return (
    <Box
      backgroundColor={Colors.gray200}
      flex={1}
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Image
        style={{ width: "100%", height: "100%", position: "absolute" }}
        source={require("@assets/images/background_overlay.png")}
      />
      <Box width="100%" height={320} paddingHorizontal={Grid.gutter_width}>
        <Box flexDirection="row" flex={1}>
          <Box flex={1}>
            <Box flex={0.85} {...b}></Box>
            <Box flex={0.5} {...b}></Box>
            <Box flex={0.5} {...b}></Box>
            <Box flex={2} {...b}></Box>
          </Box>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            flex={3}
            flexWrap={1}
          >
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
            <Box width="33.3%" {...b} height="25%"></Box>
          </Box>

          {/* <Box
          flexDirection="row"
          justifyContent="space-between"
          flex={3}
          flexWrap={1}
        >
          {buttons.map(({ color, text, icon, name, defaultState }) => {
            return (
              <Box key={text} flexDirection="column" marginBottom={Sizes[4]}>
                <Button color={color} onPress={() => console.log("pressed")}>
                  <Text color={Colors.white} fontSize={16} marginBottom={3}>
                    {text}
                  </Text>
                  {icon}
                </Button>
                <Box
                  marginTop={Sizes[1]}
                  flexDirection="row"
                  alignItems="center"
                >
                  <Diode
                    marginLeft={Sizes[2]}
                    state={defaultState ? "on" : "off"}
                  />
                  <Text fontSize={10} marginLeft={Sizes[2]}>
                    {name}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Box> */}
          <Box flex={1}>
            <Box flex={1} {...b}></Box>
            <Box flex={1} {...b}></Box>
            <Box flex={1} {...b}></Box>
            <Box flex={1} {...b}></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Main };
