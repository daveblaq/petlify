import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import COLORS from "./components/const/colors";
import OTPInput from "./components/OTPInput/OTPInput";

const VerifyOtp = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={COLORS.WHITE} />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/images/register.png")}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.welcome}>Verify your Account</Text>
          <Text style={styles.cta}>
            Kindly enter the 4 (four) Digit pin sent to this number{" "}
            <Text style={{ fontWeight: "bold" }}>0812547896</Text>
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("KnowBetter")}>
            <Text style={styles.confirm}>
              Not your number?{" "}
              <Text style={{ fontWeight: "bold", color: COLORS.BASE }}>
                Edit number
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <OTPInput />
            <OTPInput />
            <OTPInput />
            <OTPInput />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS =="ios" ? 10 : 60,
    marginHorizontal: 25,
    justifyContent: "center",

    textAlign: "left",
  },
 
  welcome: {
    paddingTop: 52,
    paddingBottom: 10,
    fontSize: Platform.OS == "ios" ? 20 : 24,
   fontFamily: "Quicksand_700Bold"
  },
  cta: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 18 : 22,
    paddingTop: 5,
    maxWidth: 357,
    lineHeight: 30,
    fontFamily: "Nunito_700Bold"
  },
  confirm: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 18 : 22,
    paddingTop: 15,
    maxWidth: 357,
    lineHeight: 30,
   fontFamily: "Nunito_500Medium",
  },
  form: {
    marginTop: Platform.OS == "ios" ? 10 : 20,
    marginHorizontal: 25,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  
});

export default VerifyOtp;
