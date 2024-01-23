import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../config/colors";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useDrawerStatus } from "@react-navigation/drawer";
Ionicons.loadFont();

const Header = ({ drawerHandler }) => {
  const [isDrawerOpen] = useDrawerStatus();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => alert("Coded By Hamid Azimi -_-")}
      >
        <Ionicons size={24} name="information-circle" color={theme.white} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={() => drawerHandler()}>
        {isDrawerOpen === "o" ? (
          <Ionicons size={24} name={"close"} color={theme.white} />
        ) : (
          <Ionicons size={24} name={"menu-sharp"} color={theme.white} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
});
