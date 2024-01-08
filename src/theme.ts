import { Platform } from "react-native";

export const Colors = {
  // Base
  primary: "#F34C27",
  black: "#000000",
  white: "#DEE8F1",

  // Grays
  gray100: "#DAD6D3", // bright
  gray200: "#A3A3A3",
  gray300: "#A9A3A3",
  gray400: "#888585",
  gray500: "#2B2B2B", // darnk
};

export const Sizes = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 40,
  10: 64,
};

export const Grid = {
  gutter_width: Sizes[5],
};

export const Corners = {
  regular: 5,
  loose: Sizes[6],
};

export const Shadow = {
  default: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
};

export const Fonts = {
  Light: "DMMono-Light",
  Medium: "DMMono-Medium",
  Regular: "DMMono-Regular",
};
