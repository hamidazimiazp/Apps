import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage/HomePage";
import ScannerPage from "../pages/ScannerPage/ScannerPage";
import Tabs from "./Tabs";
import AboutPage from "../pages/AboutPage/AboutPage";
import ScannedResult from "../pages/ScannedResult/ScannedResult";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Scanner" component={ScannerPage} />
      <Stack.Screen name="About" component={AboutPage} />
      <Stack.Screen name="Result" component={ScannedResult} />
    </Stack.Navigator>
  );
};

export default Stacks;
