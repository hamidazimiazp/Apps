import "react-native-gesture-handler";
import HomePage from "./pages/HomePage/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar, Text, View } from "react-native";
import { useState } from "react";
import useFonts from "./hooks/useFonts";
import AppLoading from "expo-app-loading";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => {
          SetIsReady(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />

      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen
          name="Details"
          component={DetailsPage}
          options={{ drawerItemStyle: { display: "none" } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
