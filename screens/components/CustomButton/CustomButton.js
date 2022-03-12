import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import COLORS from "../const/colors";

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.btnsecond, styles[`btn_${type}`]]}
      onPress={onPress}
    >
      <Text style={styles[`text_${type}`]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnsecond: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
  },

  btn_PRIMARY: {
    backgroundColor: COLORS.BASE,
  },
  btn_TERTIARY: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    borderColor: COLORS.PRIMARY,
  },
  btn_SECONDARY: {
    backgroundColor: "#1E1E24",
  },
  text_PRIMARY: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 16,
  },
  text_TERTIARY: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: 16,
  },
  text_SECONDARY: {
    color: COLORS.PRIMARY,
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CustomButton;
