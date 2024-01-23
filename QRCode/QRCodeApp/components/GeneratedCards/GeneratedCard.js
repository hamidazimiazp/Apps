import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { theme } from "../../config/colors";
import { TextShortener } from "../../utils/tools";
import { base_url } from "../../config/statics";

const GeneratedCard = ({ data }) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftCard}>
        <Text style={styles.title}>{TextShortener(data.title, 20)}</Text>
      </View>
      <View style={styles.rightCard}>
        <Image style={styles.image} source={{ uri: base_url + data.image }} />
      </View>
    </View>
  );
};

export default GeneratedCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: theme.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  leftCard: {},
  rightCard: {},
  title: {
    fontSize: 16,
    color: theme.secondary,
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
});
