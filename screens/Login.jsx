import { View, Text, SafeAreaView, ImageBackground, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import React from 'react';
import { StatusBar } from "expo-status-bar";
import COLORS from './components/const/colors';
import CustomInput from './components/CustomInput/CustomInput'
import CustomButton from "./components/CustomButton/CustomButton";

const Login = ({ navigation }) => {
	return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar backgroundColor={COLORS.WHITE} />
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../assets/images/login.png")}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.logo}>Logo</Text>
          <Text style={styles.welcome}>Welcome Back</Text>
          <Text style={styles.cta}>Lets get you right back into it</Text>
        </View>
        <View style={styles.form}>
          <CustomInput label="Phone Number" placeholder="+234 80-352-8542" />
          <CustomButton text="SIGN IN" type="PRIMARY" />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("SignupOne")}
          >
            <Text style={styles.footerText}>
              Don't have an account?{" "}
              <Text
                style={{
                  color: COLORS.BASE,
                }}
              >
                Sign Up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS =="ios" ? 130 : 180,
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    color: COLORS.BASE,
    fontSize: Platform.OS == "ios" ? 40 : 60,
    fontFamily: "Quicksand_700Bold",
  },
  welcome: {
    paddingTop: 52,
    paddingBottom: 10,
    fontSize: Platform.OS == "ios" ? 24 : 40,
  
    fontFamily: "Quicksand_700Bold"
  },
  cta: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 18 : 22,
    paddingTop: 5,
    fontFamily: "Quicksand_700Bold"
  },
  form: {
    marginTop: 40,
    marginHorizontal: 25,
  },
  footerText: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 16 : 20,
    marginTop: 30,
    textAlign: "center",
    fontFamily: "Quicksand_700Bold"
  },
});

export default Login