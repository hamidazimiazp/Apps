import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../../assets/colors/colors";

Feather.loadFont();
MaterialCommunityIcons.loadFont();

const DetailsPage = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.headerLeft}>
            <Feather name="chevron-left" size={20} color={colors.textDark} />
          </View>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <MaterialCommunityIcons name="star" color={colors.white} size={20} />
        </View>
      </SafeAreaView>
      <ScrollView>
        {/* titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesTitle}>{data.title}</Text>
        </View>
        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceTitle}>${data.price}</Text>
        </View>

        {/*  info */}
        <View style={styles.InfoWrapper}>
          <View style={styles.InfoLeft}>
            <View style={styles.InfoItemWrapper}>
              <Text style={styles.infoItemTItle}>Size</Text>
              <Text style={styles.infoItemData}>
                {data.sizeName} {data.sizeNumber}"
              </Text>
            </View>
            <View style={styles.InfoItemWrapper}>
              <Text style={styles.infoItemTItle}>Crust</Text>
              <Text style={styles.infoItemData}>{data.crust}</Text>
            </View>
            <View style={styles.InfoItemWrapper}>
              <Text style={styles.infoItemTItle}>Delivery In</Text>
              <Text style={styles.infoItemData}>{data.deliveryTime}</Text>
            </View>
          </View>
          <View style={styles.InfoRight}>
            <Image source={data.image} style={styles.itemImage} />
          </View>
        </View>

        {/* ingredients */}
        <FlatList
          style={{
            marginLeft: 20,
            marginTop: 35,
          }}
          showsHorizontalScrollIndicator={false}
          data={data.ingredients}
          keyExtractor={(item, index) => item.id + index}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity style={styles.ingredientItemWrapper}>
                <Image source={item.image} style={styles.ingredientItemImage} />
                <Text style={styles.ingredientItemText}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* make order */}
        <TouchableOpacity onPress={() => alert(200)} style={styles.orderButton}>
          <Text style={styles.orderButtonText}>Place an order</Text>
          <Feather
            style={styles.orderButtonIcon}
            name="chevron-right"
            size={20}
            color={colors.textDark}
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textDark,
    padding: 12,
    borderWidth: 2,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 10,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  titlesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: colors.textDark,
    width: "50%",
  },
  priceWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  priceTitle: {
    color: colors.price,
    fontSize: 32,
    fontFamily: "Montserrat-SemiBold",
  },
  InfoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  InfoLeft: {
    paddingLeft: 20,
  },

  InfoItemWrapper: {
    marginTop: 20,
  },
  infoItemTItle: {
    fontSize: 14,
    color: colors.textLight,
    fontFamily: "Montserrat-Medium",
  },
  infoItemData: {
    fontSize: 16,
    color: colors.black,
    fontFamily: "Montserrat-SemiBold",
  },
  InfoRight: {
    marginRight: -80,
  },
  itemImage: {
    resizeMode: "contain",
  },
  ingredientItemWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    height: 100,
    marginRight: 15,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  ingredientItemImage: {
    resizeMode: "contain",
    width: 80,
    height: 80,
  },
  ingredientItemText: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: colors.textDark,
  },
  orderButton: {
    width: "90%",
    paddingVertical: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: colors.primary,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 100,
  },
  orderButtonText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
  },
  orderButtonIcon: {
    fontWeight: "bold",
  },
});
