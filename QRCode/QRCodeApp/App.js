import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import Drawer from "./config/Drawer";
import { theme } from "./config/colors";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={theme.Quaternary}
        barStyle={"light-content"}
      />
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>
      <Toast />
    </>
  );
}
