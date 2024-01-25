import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../../config/colors";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";
import { base_url } from "../../config/statics";
import Ionicons from "@expo/vector-icons/Ionicons";

Ionicons.loadFont();

const CreateQrCode = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setData({ title: "", description: "" });
  }, []);

  const onchangeHandler = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const createHandler = () => {
    if (data.title === "" || data.description === "") {
      Toast.show({
        type: "error",
        text1: "Invalid Data!",
        text2: "All Fields Required 👋",
      });
    } else {
      fetch(base_url + "/api/qrcode", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.status === 201) {
          setData({ title: "", description: "" });
          Toast.show({
            type: "success",
            text1: "Created!",
            text2: "A new Qr code has been created 👋",
          });
          setToggle(!toggle);
        } else {
          Toast.show({
            type: "error",
            text1: "Faild To Create",
            text2: "Try Again 👋",
          });
        }
      });
    }
  };

  useEffect(() => {
    navigation.navigate("Home", {
      screen: "HomeTab",
      params: { refreshAgain: toggle },
    });
  }, [toggle]);

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
      <Text style={styles.title}>QR Code</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        placeholderTextColor={theme.textLight}
        value={data.title}
        onChangeText={(value) => onchangeHandler("title", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor={theme.textLight}
        value={data.description}
        onChangeText={(value) => onchangeHandler("description", value)}
        multiline
      />
      <TouchableOpacity
        style={styles.craeteButton}
        onPress={() => createHandler()}
      >
        <Text style={styles.craeteButtonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateQrCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.Quaternary,
    justifyContent: "center",
    alignItems: "center",
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
  input: {
    width: "80%",
    borderColor: theme.white,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    color: theme.white,
    padding: 10,
  },
  craeteButton: {
    width: "80%",
    borderColor: theme.white,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 10,
    color: theme.white,
    padding: 10,
  },
  craeteButtonText: {
    color: theme.white,
    textAlign: "center",
  },
});
