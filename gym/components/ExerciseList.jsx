import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import { ScrollView } from "react-native-virtualized-view";

const ExerciseList = ({ data }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => {
          return <ExerciseCard router={router} index={index} item={item} />;
        }}
      />
    </View>
  );
};

export default ExerciseList;

const ExerciseCard = ({ item, index, router }) => {
  return (
    <ScrollView>
      <TouchableOpacity
        style={{
          paddingVertical: 3,
          borderRadius: 10,
        }}
        onPress={() =>
          router.push({ pathname: "/exerciseDetails", params: item })
        }
      >
        <View style={{ backgroundColor: "#fff", borderRadius: 25 }}>
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{
              width: wp(45),
              height: wp(52),
              borderRadius: 10,
            }}
          />
        </View>
        <Text
          style={{
            color: "rgb(64 64 64)",
            fontWeight: "600",
            letterSpacing: 1,
            fontSize: hp(1.7),
          }}
        >
          {item?.name.length > 20 ? item.name.slice(0, 20) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyPartCard: {
    width: wp(44),
    height: wp(52),
    justifyContent: "flex-end",
    padding: 4,
    marginBottom: 20,
  },
  cardTitle: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: 1,
    fontSize: hp(2.3),
  },
});
