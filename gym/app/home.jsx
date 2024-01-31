import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "@expo/vector-icons/Ionicons";

Ionicons.loadFont();

const Home = () => {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style={"dark"} />

      {/* punchline */}
      <View style={styles.punchline}>
        <View style={styles.punchlinContent}>
          <Text style={styles.punchlinContentText}>READY TO</Text>
          <Text
            style={[styles.punchlinContentText, styles.punchlinContentTextTwo]}
          >
            WORKOUT
          </Text>
        </View>
        {/* avatar */}
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../assets/images/avatar.png")}
            style={styles.avatarImage}
          />
          <View style={styles.iconWrapper}>
            <Ionicons name="notifications" size={hp(3)} color={"gray"} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
  },
  punchline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 5,
  },
  punchlinContent: {
    paddingVertical: 2,
  },
  punchlinContentText: {
    fontSize: hp(4.5),
    fontWeight: "bold",
    color: "rgb(64 64 64)",
  },
  punchlinContentTextTwo: {
    color: "rgb(244 63 94)",
  },
  avatarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 2,
  },
  avatarImage: {
    height: hp(6),
    width: hp(6),
    objectFit: "cover",
    borderRadius: 9999,
  },
  iconWrapper: {
    color: "rgb(228 228 231)",
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    height: hp(5.5),
    width: hp(5.5),
    borderWidth: 3,
    borderColor: "rgb(214 211 209);",
    marginTop: 5,
  },
});
