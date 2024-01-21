import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage/HomePage";
import ScannerPage from "../pages/ScannerPage/ScannerPage";
import Tabs from "./Tabs";
import AboutPage from "../pages/AboutPage/AboutPage";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={Tabs} />
      <Stack.Screen name="ScannerStack" component={ScannerPage} />
      <Stack.Screen name="AboutStack" component={AboutPage} />
    </Stack.Navigator>
  );
};

export default Stacks;
