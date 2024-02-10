import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const BodyParts = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercises</Text>

      <FlatList
        data={bodyParts}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
};

export default BodyParts;

const BodyPartCard = ({ item, router, index }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        activeOpacity={0.8}
        style={styles.bodyPartCard}
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{
            width: wp(45),
            height: wp(52),
            borderRadius: 35,
            position: "absolute",
          }}
        />

        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          style={{
            width: wp(45),
            height: hp(15),
            position: "absolute",
            bottom: 0,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}
        />
        <Text style={styles.cardTitle}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 4,
  },
  title: {
    fontSize: hp(3),
    fontWeight: "600",
    color: "rgb(64 64 64)",
  },
  bodyPartCard: {
    width: wp(44),
    height: wp(52),
    justifyContent: "flex-end",
    padding: 4,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: hp(2.3),
  },
});
