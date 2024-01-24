import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { base_url } from "../../config/statics";

const QrcodeFullDetails = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code</Text>
      <Image source={{ uri: base_url + data.image }} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <TouchableOpacity
        style={styles.sendButton}
        activeOpacity={0.8}
        onPress={() => onShare()}
      >
        <Text style={styles.sendButtonText}>Share</Text>
        <Ionicons
          style={{ marginLeft: 10 }}
          name="share-social-outline"
          size={18}
          color={theme.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default QrcodeFullDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
  },
  sendButton: {
    width: "90%",
    backgroundColor: theme.tertiary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: theme.white,
    fontWeight: "bold",
  },
});
