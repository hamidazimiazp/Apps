import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HomePage/HomePage";
import ScannerPage from "../pages/ScannerPage/ScannerPage";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Scanner" component={ScannerPage} />
    </Tab.Navigator>
  );
};

export default Tabs;
