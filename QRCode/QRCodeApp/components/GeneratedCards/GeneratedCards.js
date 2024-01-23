import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import GeneratedCard from "./GeneratedCard";
import { base_url } from "../../config/statics";

const GeneratedCards = ({ setBottomPanelData, openModal }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(base_url + "/api/qrcode")
        .then((response) => response.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, []);

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
