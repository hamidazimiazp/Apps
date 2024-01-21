import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import GeneratedCard from "./GeneratedCard";

const GeneratedCards = ({ setBottomPanelData, openModal }) => {
  const data = [
    {
      id: 1,
      image: require("../../assets/images/QRcode.png"),
      title: "this is title 1",
      description: "this is a small description for code 1",
    },
    {
      id: 2,
      image: require("../../assets/images/QRcode.png"),
      title: "this is title 2",
      description: "this is a small description for code 2",
    },
    {
      id: 3,
      image: require("../../assets/images/QRcode.png"),
      title: "this is title 3",
      description: "this is a small description for code 3",
    },
    {
      id: 4,
      image: require("../../assets/images/QRcode.png"),
      title: "this is title 4",
      description: "this is a small description for code 4",
    },
    {
      id: 5,
      image: require("../../assets/images/QRcode.png"),
      title: "this is title 5",
      description: "this is a small description for code 5",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          activeOpacity={0.8}
          key={item.id}
          onPress={() => {
            setBottomPanelData(item);
            openModal();
          }}
        >
          <GeneratedCard data={item} />
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default GeneratedCards;

const styles = StyleSheet.create({
  container: {
    margintop: 15,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});