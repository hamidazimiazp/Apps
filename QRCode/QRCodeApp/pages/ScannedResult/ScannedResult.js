import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../config/colors";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Clipboard from "expo-clipboard";
import Toast from "react-native-toast-message";

Ionicons.loadFont();

const ScannedResult = ({ navigation, route }) => {
  const { type, data } = route.params;

  const copyData = () => {
    Clipboard.setString(data);
    Toast.show({
      type: "success",
      text1: "Copied!",
      text2: `${data}👋`,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity
          style={styles.topRowBackButton}
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons size={20} color={theme.black} name="chevron-back" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Rusult : </Text>
      <Text style={styles.data}>{data}</Text>
      <TouchableOpacity
        style={styles.copyButton}
        onPress={() => copyData()}
        activeOpacity={0.8}
      >
        <Text style={styles.data}>Copy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScannedResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Quaternary,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  topRow: {
    width: "80%",
  },
  topRowBackButton: {
    width: 40,
    height: 40,
    backgroundColor: theme.textLight,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: theme.white,
  },
  title: {
    color: theme.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  data: {
    color: theme.white,
    fontSize: 18,
  },
  copyButton: {
    width: "80%",
    borderColor: theme.white,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    color: theme.white,
    padding: 10,
    textAlign: "center",
  },
});
