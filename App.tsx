import { useFonts } from "expo-font";
import { LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Main } from "./src/screens/main";

export default function App() {
  LogBox.ignoreAllLogs();

  const [fontsLoaded] = useFonts({
    "DMMono-Light": require("./assets/fonts/DM_Mono/DMMono-Light.ttf"),
    "DMMono-Medium": require("./assets/fonts/DM_Mono/DMMono-Medium.ttf"),
    "DMMono-Regular": require("./assets/fonts/DM_Mono/DMMono-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Main />
    </>
  );
}
