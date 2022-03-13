import React from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import COLORS from "../const/colors";

const OTPInput = ({
  placeholder,
  secureTextEntry,
  error,
  password,
  onFocus = () => {},
  label,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={styles.container}>
     
      <TextInput
        style={[
          styles.input,
          {
            borderColor: error ? "red" : isFocused ? COLORS.BASE : "#fff",
          },
			  ]}
			
        placeholder={placeholder}
        placeholderTextColor="grey"
			  secureTextEntry={secureTextEntry}
			  maxLength={1}
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 15,
  },

  input: {
    backgroundColor: "#F2F4F7",
    marginTop: 10,

    height: 80,
    fontSize: Platform.OS == "ios" ? 20 : 24,
    fontWeight: "900",
    alignSelf: "center",
    textAlign: "center",
    borderRadius: 16,
    color: COLORS.DARK,
    width: 70,
    borderWidth: 1.5,
  },
});

export default OTPInput;
