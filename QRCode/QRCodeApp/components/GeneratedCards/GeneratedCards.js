import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import GeneratedCard from "./GeneratedCard";
import { base_url } from "../../config/statics";
import { theme } from "../../config/colors";
import { FontAwesome5 } from "@expo/vector-icons";

const GeneratedCards = ({ setBottomPanelData, openModal }) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    setRefreshing(true);
    fetch(base_url + "/api/qrcode")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setRefreshing(false);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <SafeAreaView style={styles.container}>
        {data.length >= 1 ? (
          data.map((item) => (
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
          ))
        ) : (
          <View style={styles.ifNotQrCodeWrapper}>
            <Text style={styles.ifNotQrCodeText}>Make One</Text>
            <FontAwesome5 name="hand-point-up" size={14} color={theme.white} />
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

export default GeneratedCards;

const styles = StyleSheet.create({
  container: {
    margintop: 15,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  ifNotQrCodeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  ifNotQrCodeText: {
    color: theme.white,
    fontSize: 14,
  },
});
