import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Stacks from "./Stack";
import CreateQrCode from "../pages/CreateQrCode/CreateQrCode";
import ScannerPage from "../pages/ScannerPage/ScannerPage";
import Tabs from "./Tabs";
import ScannedResult from "../pages/ScannedResult/ScannedResult";

const Drawerr = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawerr.Navigator screenOptions={{ headerShown: false }}>
      <Drawerr.Screen name="Home" component={Tabs} />
      <Drawerr.Screen name="Scanner" component={ScannerPage} />
      <Drawerr.Screen name="Create" component={CreateQrCode} />
      <Drawerr.Screen name="Result" component={ScannedResult} />
    </Drawerr.Navigator>
  );
};

export default Drawer;
