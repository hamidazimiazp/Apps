import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React from "react";
import CreateQrCode from "../pages/CreateQrCode/CreateQrCode";
import Stacks from "./Stack";
import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { theme } from "./colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawerr = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawerr.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: theme.white,
        drawerInactiveTintColor: theme.textLight,
      }}
      drawerContent={(props) => {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.topDrawer}>
              <Image
                style={styles.image}
                source={require("../assets/images/QRcode.png")}
              />
              <Text style={styles.title}>Qr Code -_-</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              style={{
                backgroundColor: "#E1392A",
              }}
              label="Instagram"
              onPress={() =>
                Linking.openURL("https://www.instagram.com/geek.with.me")
              }
              icon={(focused, size, color) => {
                return (
                  <Ionicons
                    name={"logo-instagram"}
                    color={theme.white}
                    size={18}
                  />
                );
              }}
              activeTintColor={theme.white}
              inactiveTintColor={theme.textLight}
            />
          </SafeAreaView>
        );
      }}
    >
      <Drawerr.Screen
        name="HomeDrawer"
        component={Stacks}
        options={{
          drawerLabel: "Home",
          drawerIcon: () => {
            return <Ionicons name="home" size={18} color={theme.white} />;
          },
        }}
      />
      <Drawerr.Screen
        name="Create QR Code"
        component={CreateQrCode}
        options={{
          drawerIcon: () => {
            return <Ionicons name="qr-code" size={18} color={theme.white} />;
          },
        }}
      />
    </Drawerr.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: theme.tertiary,
  },
  topDrawer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
    objectFit: "contain",
  },
  title: {
    color: theme.white,
    fontWeight: "bold",
  },
});
