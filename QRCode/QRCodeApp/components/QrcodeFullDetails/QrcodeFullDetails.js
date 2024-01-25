import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { theme } from "../../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { base_url } from "../../config/statics";
import Toast from "react-native-toast-message";

const QrcodeFullDetails = ({ data }) => {
  const removeCode = () => {
    fetch(base_url + `/api/qrcode/${data.id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 204) {
        Toast.show({
          type: "info",
          text1: "Deleted!",
        });
      } else {
        console.log(res);
        Toast.show({
          type: "error",
          text1: "Faild To Delete",
          text2: "Try Again 👋",
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code</Text>
      <Image source={{ uri: base_url + data.image }} style={styles.image} />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.cta}>
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
        <TouchableOpacity
          style={[styles.sendButton, { backgroundColor: theme.danger }]}
          activeOpacity={0.8}
          onPress={() => removeCode()}
        >
          <Text style={styles.sendButtonText}>Delete</Text>
          <Ionicons
            name="trash"
            size={18}
            color={theme.white}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
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
    backgroundColor: theme.tertiary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: theme.white,
    fontWeight: "bold",
  },
  cta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    gap: 5,
  },
  trash: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
