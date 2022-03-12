import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, Platform, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Feather } from "@expo/vector-icons";
import COLORS from "./components/const/colors";
import FONTS from "./components/const/fonts";

const { width, height } = Dimensions.get("window");
const slides = [
  {
    id: 1,
    image: require("../assets/images/onboarding/onboarding-01.png"),
    title: "Adopt Pets",
    subtitle: "Get access to lovely pets up for adoption around you",
  },
  {
    id: 2,
    image: require("../assets/images/onboarding/onboarding-02.png"),
    title: "Sell Pets",
    subtitle:
      "Put up pets for adoption with ease within your preferred location",
  },
  {
    id: 3,
    image: require("../assets/images/onboarding/onboarding-03.png"),
    title: "Care For Pet",
    subtitle: "Easily Book appointments with vet doctors nearby ",
  },
  {
    id: 4,
    image: require("../assets/images/onboarding/onboarding-04.png"),
    title: "Pet Store",
    subtitle: "Get a wide varieties of pet toys, food, and consumables",
  },
];

const Onboarding = ({ navigation}) => {

	 const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
   const ref = React.useRef();
   const updateCurrentSlideIndex = (e) => {
     const contentOffsetX = e.nativeEvent.contentOffset.x;
     const currentIndex = Math.round(contentOffsetX / width);
     setCurrentSlideIndex(currentIndex);
   };

   const goToNextSlide = () => {
     const nextSlideIndex = currentSlideIndex + 1;
     if (nextSlideIndex != slides.length) {
       const offset = nextSlideIndex * width;
       ref?.current.scrollToOffset({ offset });
       setCurrentSlideIndex(currentSlideIndex + 1);
     }
   };

   const skip = () => {
     const lastSlideIndex = slides.length - 1;
     const offset = lastSlideIndex * width;
     ref?.current.scrollToOffset({ offset });
     setCurrentSlideIndex(lastSlideIndex);
   };
	
	
	
	
	
	
	
   
	const Footer = () => {
		return (
      <>
        {currentSlideIndex == slides.length - 1 ? (
          <>
            <View style={styles.footer}>
              <View style={styles.btnRow}>
                <Feather name="arrow-left" size={20} color={COLORS.BTN_FADED} />
                <Text style={styles.btnLeft}>SKIP</Text>
              </View>
              <View style={styles.btnRow}>
                <Text style={styles.btnRight}>NEXT</Text>
                <Feather name="arrow-right" size={20} color={COLORS.BASE} />
              </View>
            </View>
          </>
        ) : (
          <>
            <View style={styles.footer}>
              <TouchableOpacity>
                <View style={styles.btnRow}>
                  <Feather
                    name="arrow-left"
                    size={20}
                    color={COLORS.BTN_FADED}
                  />
                  <Text style={styles.btnLeft}>SKIP</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
              >
                <View style={styles.btnRow}>
                  <Text style={styles.btnRight}>NEXT</Text>
                  <Feather name="arrow-right" size={20} color={COLORS.BASE} />
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </>
    );
  };
	
	
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLORS.BACKGROUND_COLOR} />
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../assets/images/onboarding/onboarding-01.png")}
          style={{
            height: "100%",
          }}
          resizeMode="cover"
        ></ImageBackground>
      </View>
      <View style={styles.Content}>
        <ImageBackground
          source={require("../assets/images/bg.png")}
          style={{
            height: "100%",
            width: "100%",
          }}
          resizeMode="cover"
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Adopt Pets</Text>
            <Text style={styles.subtitle}>
              Get Access to lovely pets up for adoption around you
            </Text>
          </View>
        <Footer />
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: "60%",
    backgroundColor: COLORS.WHITE,
  },
  Content: {
    height: "40%",
    backgroundColor: COLORS.WHITE,
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingVertical: 60,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 4,
    borderTopColor: COLORS.BASE,
  },
  title: {
    fontSize: Platform.OS == "ios" ? 24 : 40,
    paddingBottom: 15,
    fontWeight: "700",
    color: "#212738",
  },
  subtitle: {
    fontSize: Platform.OS == "ios" ? 16 : 20,
    lineHeight: 28,
    maxWidth: 331,
    textAlign: "center",
    color: COLORS.FADED,
  },
  footer: {
    marginVertical: Platform.OS == "ios" ? 8 : 30,
    backgroundColor: "#f2f4f7",
    height: 60,
    marginHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  btnLeft: {
    color: COLORS.BTN_FADED,
    fontSize: Platform.OS == "ios" ? 18 : 22,
    fontWeight: "700",
  },
  btnRight: {
    color: COLORS.BASE,
    fontSize: Platform.OS == "ios" ? 18 : 22,
    fontWeight: "700",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});



export default Onboarding;


