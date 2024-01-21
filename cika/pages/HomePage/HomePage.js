import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import categoriesData from "../../assets/data/categoriesData";
import popularData from "../../assets/data/popularData";
import colors from "../../assets/colors/colors";
import { useDrawerStatus } from "@react-navigation/drawer";

Feather.loadFont();
MaterialCommunityIcons.loadFont();

export const CategoriesSection = () => {
  return (
    <View style={styles.categoriesWrapper}>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <View style={styles.categoriesListWrapper}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categoriesData}
          keyExtractor={(item, index) => item.id + index}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <View
                style={[
                  styles.categoriesItemWrapper,
                  {
                    backgroundColor: item.selected
                      ? colors.primary
                      : colors.white,
                  },
                ]}
              >
                <Image source={item.image} style={styles.categoriesItemImage} />
                <Text style={styles.categoriesItemTitle}> {item.title}</Text>
                <View
                  style={[
                    styles.categoriesSelectWrapper,
                    {
                      backgroundColor: item.selected
                        ? colors.white
                        : colors.secondary,
                    },
                  ]}
                >
                  <Feather
                    style={[
                      styles.categoriesSelectItem,
                      {
                        color: item.selected ? colors.textDark : colors.white,
                      },
                    ]}
                    name="chevron-right"
                    size={12}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const HomePage = ({ navigation }) => {
  const [isDrawerOpen] = useDrawerStatus();

  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView style={styles.headerWrapper}>
        {/* profile */}
        <TouchableOpacity onPress={() => alert("Coded By Hamid Azimi :)")}>
          <Image
            style={styles.profileImage}
            source={require("../../assets/images/profile.png")}
          />
        </TouchableOpacity>
        {/* menu button */}
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          {/* icon */}
          {isDrawerOpen === "o" ? (
            <Feather name="x" size={24} color={colors.textDark} />
          ) : (
            <Feather name="menu" size={24} color={colors.textDark} />
          )}
        </TouchableOpacity>
      </SafeAreaView>

      {/* titles */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.titlesSubTitle}>Food</Text>
        <Text style={styles.titlesTitle}>Delivery</Text>
      </View>

      {/* search */}
      <View style={styles.searchWrapper}>
        <Feather name="search" size={16} color={colors.textDark} />
        <View style={styles.search}>
          <TextInput placeholder="Search" />
        </View>
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: 10 }}
      >
        {/* Categories */}
        <CategoriesSection />
        {/* Popular */}
        <View style={styles.popularWrapper}>
          <Text style={styles.popularTitle}>Popular</Text>
          <FlatList
            style={{ paddingBottom: 10 }}
            showsVerticalScrollIndicator={false}
            data={popularData}
            keyExtractor={(item, index) => item.id + index}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate("Details", { data: item })}
                >
                  <View
                    style={[
                      styles.popularCardWrapper,
                      {
                        marginTop: item.id === 1 ? 10 : 20,
                      },
                    ]}
                  >
                    <View>
                      <View>
                        <View style={styles.popularCardTopWrapper}>
                          <MaterialCommunityIcons
                            name="crown"
                            size={20}
                            color={colors.primary}
                          />
                          <Text style={styles.popularCardTopText}>
                            Top Of The Week
                          </Text>
                        </View>
                        <View style={styles.popularCardTitleWrapper}>
                          <Text style={styles.popularCardTitleTitle}>
                            {item.title}
                          </Text>
                          <Text style={styles.popularCardTitleWeight}>
                            Weight {item.weight}
                          </Text>
                        </View>
                      </View>
                      <View style={styles.popularCardBottom}>
                        <TouchableOpacity style={styles.popularAddButtom}>
                          <Feather
                            name="plus"
                            size={18}
                            color={colors.textDark}
                          />
                        </TouchableOpacity>
                        <View style={styles.popularRatingWrapper}>
                          <MaterialCommunityIcons
                            name="star"
                            size={10}
                            color={colors.textDark}
                          />
                          <Text style={styles.popularratingTitle}>
                            {item.rating}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.popularCardRight}>
                      <Image
                        style={styles.popularCardRightImage}
                        source={item.image}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;

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
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 40,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titlesSubTitle: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: colors.textDark,
  },
  titlesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 32,
    color: colors.primary,
    marginTop: 5,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  search: {
    flex: 1,
    marginLeft: 10,
    borderBottomColor: colors.textLight,
    borderBottomWidth: 2,
  },
  searchText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 5,
  },
  categoriesWrapper: {
    paddingTop: 30,
  },
  categoriesTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  categoriesItemWrapper: {
    backgroundColor: colors.primary,
    marginRight: 20,
    marginBottom: 5,
    borderRadius: 20,
    paddingHorizontal: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  categoriesItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignSelf: "center",
    marginHorizontal: 20,
  },
  categoriesItemTitle: {
    textAlign: "center",
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 10,
  },
  categoriesSelectWrapper: {
    alignSelf: "center",
    justifyContent: "center",
    width: 33,
    height: 33,
    backgroundColor: colors.white,
    borderRadius: 20,
    alignItems: "center",
    marginVertical: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  categoriesSelectItem: {},
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
  },
  popularCardWrapper: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
  },
  popularCardTopWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  popularCardTopText: {
    marginLeft: 10,
    fontFamily: "Montserrat-SemiBold",
  },
  popularCardTitleWrapper: {
    marginTop: 20,
  },
  popularCardTitleTitle: {
    fontFamily: "Montserrat-SemiBold",
    color: colors.textDark,
    fontSize: 14,
  },
  popularCardTitleWeight: {
    fontFamily: "Montserrat-Medium",
    color: colors.textDark,
    fontSize: 12,
    marginTop: 5,
  },
  popularCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: -20,
  },
  popularAddButtom: {
    backgroundColor: colors.primary,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  popularRatingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  popularratingTitle: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 12,
    color: colors.textDark,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 40,
  },
  popularCardRightImage: {
    width: 210,
    height: 125,
    resizeMode: "contain",
  },
});
