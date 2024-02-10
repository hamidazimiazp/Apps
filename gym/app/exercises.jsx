import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodypart } from "../api/exerciseDB";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ExerciseList from "../components/ExerciseList";
import { demoExercises } from "../constants";
import { ScrollView } from "react-native-virtualized-view";

const exercises = () => {
  const router = useRouter();
  const data = useLocalSearchParams();
  const [exercises, setExercises] = useState(demoExercises);

  useEffect(() => {
    if (data) {
      // getExercises(data.name, 50);
    }
  }, [data]);

  const getExercises = async (bodyPart, limit) => {
    let data = await fetchExercisesByBodypart(bodyPart, limit);
    setExercises(data);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style={"light"} />
      <Image source={Number(data.image)} style={styles.image} />
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => router.back()}
      >
        <Ionicons
          name="caret-back-outline"
          size={hp(4)}
          color="white"
          style={{ paddingRight: 5 }}
        />
      </TouchableOpacity>
      {/* exercises */}
      <View style={styles.exercises}>
        <Text style={styles.title}>{data.name} Exercises</Text>
        <View style={{ marginTop: 10 }}>
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
};

export default exercises;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: wp(100),
    height: hp(45),
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  card: {
    backgroundColor: "rgb(244 63 94)",
    marginHorizontal: 10,
    position: "absolute",
    borderRadius: 999,
    width: hp(5.5),
    height: hp(5.5),
    marginTop: hp(7),
    alignItems: "center",
    justifyContent: "center",
  },
  exercises: {
    marginHorizontal: 4,
    paddingVertical: 3,
    marginTop: 4,
    padding: 10,
  },
  title: {
    fontSize: hp(3),
    fontWeight: "700",
    color: "rgb(64 64 64)",
  },
});
