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





const Stack = createNativeStackNavigator();
function App() {
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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});


export default App;