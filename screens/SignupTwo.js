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
import CustomInput from "./components/CustomInput/CustomInput";
import CustomButton from "./components/CustomButton/CustomButton";

const SignupTwo = ({ navigation }) => {
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
          <Text style={styles.welcome}>Welcome Khalid Rodriguez</Text>
          <Text style={styles.cta}>
            Please enter an active phone number and email address
          </Text>
        </View>
        <View style={styles.form}>
          <CustomInput label="Email Address" placeholder="@example.com" />
          <CustomInput label="Phone Number" placeholder="+234 80-352-8542" />
          <CustomButton text="CREATE ACCOUNT" type="PRIMARY" />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.footerText}>
              Already have an account?{" "}
              <Text
                style={{
                  color: COLORS.BASE,
                }}
              >
                Sign in
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150,
    marginHorizontal: 25,
    justifyContent: "center",

    textAlign: "left",
  },
  logo: {
    color: COLORS.BASE,
    fontSize: Platform.OS == "ios" ? 40 : 60,
  },
  welcome: {
    paddingTop: 52,
    paddingBottom: 10,
    fontSize: Platform.OS == "ios" ? 18 : 22,
    fontWeight: "bold",
  },
  cta: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 18 : 22,
    paddingTop: 5,
    maxWidth: 357,
    lineHeight: 28,
  },
  form: {
    marginTop: 40,
    marginHorizontal: 25,
  },
  footerText: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 18 : 22,
    marginTop: 30,
    textAlign: "center",
  },
});

export default SignupTwo;
