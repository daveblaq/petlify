import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, Platform, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import COLORS from "./components/const/colors";
import FONTS from "./components/const/fonts";

const { width, height } = Dimensions.get("window");
const slides = [
  {
    id: 1,
    image: require("../assets/images/error/error-01.png"),
    subtitle: "The Dogue de Bordeaux, also known as the Bordeaux Mastiff or French Mastiff, is a large mastiff breed that originated in France around 600 years ago. It is one of the oldest French dog breeds. They can be sweet and docile but they also have a stubborn and arrogant side so they require a firm handler.",
  },
  {
    id: 2,
    image: require("../assets/images/error/error-02.png"),
    subtitle: "The Valley Bulldog is a mixed breed dog–a cross between the Boxer and English Bulldog breeds. These adorable pups make great apartment dogs for active urban dwellers, and they also do well with large families.",
  },
  
];

const ErrorPage = ({ navigation }) => {

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
              <TouchableOpacity>
                <View style={styles.btnRow}>
                  <Ionicons name="refresh-outline" size={20} color={COLORS.DARK} />
                  <Text style={styles.btnLeft}>{" "} TRY AGAIN</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
              >
                <View style={styles.btnRow}>
                  <Text style={styles.btnRight}>NEXT</Text>
                  <Feather name="arrow-right" size={20} color={COLORS.BTN_FADED} />
                </View>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <>
            <View style={styles.footer}>
              <TouchableOpacity>
                <View style={styles.btnRow}>
                 <Ionicons name="refresh-outline" size={20} color={COLORS.DARK} />
                  <Text style={styles.btnLeft}>{" "}TRY AGAIN</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
              >
                <View style={styles.btnRow}>
                  <Text style={styles.btnRight}>NEXT</Text>
                  <Feather name="arrow-right" size={20} color={COLORS.BTN_FADED} />
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
          source={require("../assets/images/error/error-02.png")}
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
            <Text style={styles.label}>Fun fact</Text>
            <Text style={styles.title}>Did you know?</Text>
            <Text style={styles.subtitle}>
              The Valley Bulldog is a mixed breed dog–a cross between the Boxer and English Bulldog breeds. These adorable pups make great apartment dogs for active urban dwellers, and they also do well with large families.
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
    height: "50%",
    backgroundColor: COLORS.WHITE,
  },
  Content: {
    height: "50%",
    backgroundColor: COLORS.WHITE,
  },
  contentContainer: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    justifyContent: "center",
   textAlign: "center",
    borderTopWidth: 4,
    borderTopColor: COLORS.BASE,
  },
  title: {
    fontSize: Platform.OS == "ios" ? 24 : 40,
    paddingBottom: 15,
    fontWeight: "600",
    color: "#212738",
  },
  subtitle: {
    fontSize: Platform.OS == "ios" ? 16 : 20,
    lineHeight: 36,
    textAlign: "left",
    color: COLORS.FADED,
  },
  footer: {
    marginVertical: Platform.OS == "ios" ? 2 : 30,
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
    color: COLORS.DARK,
    fontSize: Platform.OS == "ios" ? 18 : 22,
    fontWeight: "700",
  },
  btnRight: {
    color: COLORS.BTN_FADED,
    fontSize: Platform.OS == "ios" ? 18 : 22,
    fontWeight: "700",
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
	},
	label: {
		color: COLORS.BASE,
		fontSize: Platform.OS == "ios" ? 18 : 22,
		paddingBottom: 5,
  }
});



export default ErrorPage;


