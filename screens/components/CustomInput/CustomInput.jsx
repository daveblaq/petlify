import React from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import COLORS from "../const/colors";

const CustomInput = ({
  placeholder,
  secureTextEntry,
  error,
  password,
	onFocus = () => { },
  label,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
	  <View style={styles.container}>
		  <Text style={styles.label}>{label}</Text>
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
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {error && (
        <Text style={{ marginTop: 7, color: "red", fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },

  input: {
    backgroundColor: "#F2F4F7",
    marginTop: 16,
    height: 50,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: Platform.OS == "ios" ? 16 : 18,
    borderRadius: 20,
    color: COLORS.BTN_FADED,

    borderWidth: 1.5,
  },
  label: {
    
    color: "#63687E",
    fontSize: Platform.OS == "ios" ? 16 : 18,
  },
});

export default CustomInput;
