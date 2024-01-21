import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../pages/HomePage/HomePage";
import ScannerPage from "../pages/ScannerPage/ScannerPage";

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Scanner" component={ScannerPage} />
    </Stack.Navigator>
  );
};

export default Stacks;
