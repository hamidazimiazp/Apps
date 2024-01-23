import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Drawer from "./config/Drawer";
import { theme } from "./config/colors";
import Stacks from "./config/Stack";

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
