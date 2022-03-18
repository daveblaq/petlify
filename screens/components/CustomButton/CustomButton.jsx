import React from "react";
import { StyleSheet, TouchableOpacity, Text, Platform, Image } from "react-native";
import COLORS from "../const/colors";
import { Ionicons } from "@expo/vector-icons";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btnsecond, styles[`btn_${type}`]]}
      onPress={onPress}
    >
      <Text style={styles[`text_${type}`]}>
			  {text} {" "}<Image source={require('../../../assets/images/icons/paw.png')} style={styles.icon} resizeMode="contain" />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   btnsecond: {
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    borderWidth: 1,
    shadowColor: "rgba(196, 196, 196, 0.5)",
    shadowOffset: {
      width: 5,
      height: 5,
  },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
    
  },

  btn_PRIMARY: {
    backgroundColor: COLORS.BASE,
    borderColor: COLORS.BASE,
  },
  btn_TERTIARY: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderColor: COLORS.PRIMARY,
  },
  btn_SECONDARY: {
    backgroundColor: COLORS.BASE,
  },
  text_PRIMARY: {
    color: COLORS.WHITE,
    fontFamily: "Quicksand_700Bold",
    fontSize: Platform.OS == "ios" ? 18 : 20,
  },
  text_TERTIARY: {
    color: COLORS.BASE,
   fontFamily: "Quicksand_700Bold",
    fontSize: 16,
  },
  text_SECONDARY: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: 18,
  },
  icon: {
    height: 20,
    width: 20,
  }
});

export default CustomButton;
