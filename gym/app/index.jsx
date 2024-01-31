import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar style={"light"} />
      <Image
        style={styles.Image}
        source={require("../assets/images/welcome.png")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={[{ width: wp(100), height: hp(70) }, styles.gradient]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          style={styles.content}
        >
          <Text style={styles.contentText}>
            Best <Text style={styles.contentTextTwo}>Workouts</Text>
          </Text>
          <Text style={styles.contentText}>For you</Text>
        </Animated.View>

        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          style={styles.buttonWrapper}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("home")}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  Image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
  },
  gradient: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 12,
    paddingHorizontal: 8,
  },
  content: {
    alignItems: "center",
  },
  contentText: {
    color: "#fff",
    fontSize: hp(5),
    fontWeight: "bold",
  },
  contentTextTwo: {
    color: "rgb(244 63 94)",
  },
  buttonWrapper: {
    marginVertical: 10,
  },
  button: {
    height: hp(7),
    width: wp(80),
    backgroundColor: "rgb(244 63 94)",
    alignSelf: "center",
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: hp(3),
  },
});
