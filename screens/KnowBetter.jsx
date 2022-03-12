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
import SignupOption from "./components/SignupOption/SignupOption";
import { Divider } from 'react-native-elements';

const items = [
  {
    id: 1,
    text: "Sell a pet",
    image: require('../assets/images/avatars/sell.png'),
    type: "BLUE",
    hex: "#01BEFE"
  },
  {
    id: 1,
    text: "Buy a pet",
    image: require('../assets/images/avatars/buy.png'),
    type: "RED",
    hex: "#FF006D"
  }
]

const KnowBetter = ({ navigation }) => {
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
          <Text style={styles.welcome}>Lets get to know you better !</Text>
          <Text style={styles.cta}>What would you used Petlify for?</Text>
          <Divider horizontal={true} color={"#EBEDF1"} width={2} style={{ paddingVertical: 10,}} />
          
       
        </View>
        <View style={styles.form}>
          <View>
            {items.map((item, i) => (
               <SignupOption key={i} type={item.type} text={item.text} image={item.image} hex={item.hex} onPress={() => navigation.replace("ErrorPage")} />
            ))}
           
           
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == "ios" ? 30 : 80,
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
    fontSize: Platform.OS == "ios" ? 20 : 24,
    fontWeight: "bold",
  },
  cta: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 18 : 22,
    paddingTop: 5,
    maxWidth: 357,
    lineHeight: 30,
  },
  form: {
    marginTop: Platform.OS == "ios" ? 10 : 20,
    marginHorizontal: 25,
  },
  
  footerText: {
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 18 : 22,
    marginTop: 30,
    textAlign: "center",
  },
});

export default KnowBetter;
