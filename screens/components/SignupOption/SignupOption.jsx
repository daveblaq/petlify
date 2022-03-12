import { View, Text, StyleSheet, Platform, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react';
import COLORS from '../const/colors';
import { FontAwesome } from "@expo/vector-icons";

const SignupOption = ({onPress, image, text, type = "BLUE", hex}) => {
	return (
	  <TouchableWithoutFeedback onPress={onPress}>
	<View style={[styles.container, styles[`btn_${type}`]]}>
		  <View style={styles.contentContainer}>
			  <View style={styles.content}>
			  <Image source={image} style={[styles.image, styles[`image_${type}`]]} />
				  <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
			  </View>
			  <FontAwesome name="angle-right" size={28} color={hex}/>
		  </View>
			</View>
			</TouchableWithoutFeedback>
  )
}

export default SignupOption;

const styles = StyleSheet.create({
	container: {
		height: Platform.OS == "ios" ? 80: 100,
		width: '100%',
		marginVertical: 15,
		borderRadius: 16,
		justifyContent: 'center',
	},
	btn_BLUE: {
		backgroundColor: COLORS.BLUE_BG,
	},
	btn_RED: {
		backgroundColor: COLORS.RED_BG,
	},
	contentContainer: {
		paddingHorizontal: 20,
	flexDirection: "row",
		justifyContent: 'space-between',
		 alignItems: "center",
		
	},
	content: {
		justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
	},
	image: {
		height: 50,
		width: 50,
		borderRadius: 50,
		borderWidth: 2,
	},
	image_BLUE: {
		borderColor: COLORS.BLUE,
	},
	image_RED: {
		borderColor: COLORS.BASE,
	},
	text: {
		fontSize: Platform.OS == "ios" ? 18 : 24,
		fontWeight: '700',
		paddingHorizontal:20,
	},
	text_BLUE: {
		color: COLORS.BLUE,
	},
	text_RED: {
		color: COLORS.BASE,
	}
})