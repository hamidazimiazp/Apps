import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const exercises = () => {
  const router = useRouter();
  const data = useLocalSearchParams();
  console.log(data);
  return (
    <View style={styles.container}>
      <Text>exercises</Text>
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
