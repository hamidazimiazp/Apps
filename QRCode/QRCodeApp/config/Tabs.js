import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../pages/HomePage/HomePage";
import ScannerPage from "../pages/ScannerPage/ScannerPage";
import { theme } from "./colors";
import Ionicons from "@expo/vector-icons/Ionicons";
Ionicons.loadFont();

const Tab = createBottomTabNavigator();

const Tabs = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.background,
          height: 50,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.secondary,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name == "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name == "ScannerTab") {
            iconName = focused ? "qr-code" : "qr-code-outline";
          }
          return (
            <Ionicons
              name={iconName}
              size={focused ? 35 : size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomePage} />
      <Tab.Screen name="ScannerTab" component={ScannerPage} />
    </Tab.Navigator>
  );
};

export default Tabs;
