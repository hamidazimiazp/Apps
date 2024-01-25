import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CreateQrCode from "../pages/CreateQrCode/CreateQrCode";
import ScannerPage from "../pages/ScannerPage/ScannerPage";
import Tabs from "./Tabs";
import ScannedResult from "../pages/ScannedResult/ScannedResult";
import Stacks from "./Stack";

const Drawerr = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawerr.Navigator screenOptions={{ headerShown: false }}>
      <Drawerr.Screen name="Home" component={Stacks} />
      <Drawerr.Screen name="Create" component={CreateQrCode} />
    </Drawerr.Navigator>
  );
};

export default Drawer;
