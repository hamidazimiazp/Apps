import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { fetchExercisesByBodypart } from "../api/exerciseDB";

const exercises = () => {
  const router = useRouter();
  const data = useLocalSearchParams();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (data) {
      getExercises(data.name, 50);
    }
  }, [data]);

  const getExercises = async (bodyPart, limit) => {
    let data = await fetchExercisesByBodypart(bodyPart, limit);
    setExercises(data);
  };

  return (
    <View style={styles.container}>
      <Text>exercises</Text>
      {exercises && exercises.map((item) => <Text>{item.name}</Text>)}
      <TouchableOpacity onPress={() => router.back()}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default exercises;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
