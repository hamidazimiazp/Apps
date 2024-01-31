import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { sliderImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ImageSlider = () => {
  return (
    <Carousel
      data={sliderImages}
      loop={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      keyExtractor={(item, index) => item.id + index}
      slideStyle={{
        display: "flex",
        alignItems: "center",
      }}
    />
  );
};

export default ImageSlider;

const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={styles.ItemCardWrapper}>
      <ParallaxImage
        source={item.image}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ItemCardWrapper: {
    width: wp(100) - 70,
    height: hp(25),
  },
});
