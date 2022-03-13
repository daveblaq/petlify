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

const SignupOne = ({ navigation }) => {
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
          <Text style={styles.welcome}>Create an Account</Text>
          <Text style={styles.cta}>Let’s help you get started</Text>
        </View>
        <View style={styles.form}>
          <CustomInput label="Full Name" placeholder="Khalid Rodriguez" />
          <CustomButton text="CONTINUE" type="PRIMARY" onPress={() => navigation.navigate("SignupTwo")}/>
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
    marginTop: Platform.OS =="ios" ? 100 : 150,
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: COLORS.BASE,
    fontSize: Platform.OS == "ios" ? 40 : 60,
  },
  welcome: {
    paddingTop: 52,
    paddingBottom: 10,
    fontSize: Platform.OS == "ios" ? 24 : 40,
    fontWeight: "bold",
  },
  cta: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 18 : 22,
    paddingTop: 5,
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

export default SignupOne;
