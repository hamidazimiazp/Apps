import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Drawer from "./config/Drawer";
import { theme } from "./config/colors";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={theme.background} barStyle={"dark-content"} />
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
    </>
  );
}
