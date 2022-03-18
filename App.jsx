import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/userArea/HomeScreen';
import Onboarding from "./screens/Onboarding";
import Login from "./screens/Login";
import SignupOne from "./screens/SignupOne";
import SignupTwo from "./screens/SignupTwo";
import VerifyOTP from "./screens/VerifyOTP";
import KnowBetter from "./screens/KnowBetter";
import ErrorPage from "./screens/ErrorPage";
import AppLoading from 'expo-app-loading';
import BottomNavigator from './screens/navigators/BottomNavigator'

import { useFonts, Quicksand, Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import {
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
} from '@expo-google-fonts/nunito';





const Stack = createNativeStackNavigator();
function App() {

 


   let [fontsLoaded] = useFonts({
   Quicksand_300Light, Quicksand_400Regular, Quicksand_500Medium, Quicksand_600SemiBold, Quicksand_700Bold,   Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
  Nunito_200ExtraLight_Italic,
  Nunito_300Light_Italic,
  Nunito_400Regular_Italic,
  Nunito_500Medium_Italic,
  Nunito_600SemiBold_Italic,
  Nunito_700Bold_Italic,
  Nunito_800ExtraBold_Italic,
  Nunito_900Black_Italic,
  });
if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}
      >
        <Stack.Screen name="OnboardingScreen" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignupOne" component={SignupOne} />
        <Stack.Screen name="SignupTwo" component={SignupTwo} />
        <Stack.Screen name="VerifyOTP" component={VerifyOTP} />
        <Stack.Screen name="KnowBetter" component={KnowBetter} />
        <Stack.Screen name="ErrorPage" component={ErrorPage} />
        <Stack.Screen name="HomeScreen" component={BottomNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}}

const styles = StyleSheet.create({
 
});


  export default  App ;