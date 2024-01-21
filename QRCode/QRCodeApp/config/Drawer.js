import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Stacks from "./Stack";

const Drawerr = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawerr.Navigator screenOptions={{ headerShown: false }}>
      <Drawerr.Screen name="Home" component={Stacks} />
      <Drawerr.Screen name="Scanner" component={Stacks} />
    </Drawerr.Navigator>
  );
};

export default Drawer;
