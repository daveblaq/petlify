import { View, Text, StyleSheet,Image, Platform } from 'react-native'
import React from 'react';
import COLORS from '../const/colors';

const PetCategory = ({ image, pet, type="PRIMARY" }) => {
	return (
	  <>
			<View style={styles.container}>
				<View style={[styles.content, styles[`cat_${type}`]]}>
					<Image source={image}  style={styles.image} resizeMode="contain" />
				</View>
				<Text style={styles[`text_${type}`]}>{pet}</Text>
				</View>
			
	  </>
  )
}


const styles = StyleSheet.create({
	container: {
		
		alignItems: "center",
		justifyContent: "center",
		
		
		width: 100,
		marginRight: Platform.OS =='ios' ? 2 : 15,
		marginVertical: 10,
	},
		
	content: {
		
		padding: 15,
		borderRadius: 18,
		shadowColor: "rgba(196, 196, 196, 0.5)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.55,
    shadowRadius: 3,
    elevation: 7,
	},
	cat_PRIMARY: {
		backgroundColor: COLORS.BASE,
	},
	cat_TERTIARY: {
		backgroundColor: "#FCF0E9",
	},
	image: {
		width: Platform.OS =='ios' ? 52 : 65,
		height: Platform.OS =='ios' ? 69 : 80,
	},
	text_TERTIARY: {
		fontSize: Platform.OS == 'ios' ? 16 : 22,
		textAlign: "center",
		color: COLORS.FADED,
		paddingVertical: 10,
		fontFamily: "Quicksand_700Bold",
	},
	text_PRIMARY: {
		fontSize: Platform.OS == 'ios' ? 16 : 22,
		textAlign: "center",
		color: COLORS.BASE,
		paddingVertical: 10,
		fontFamily: "Quicksand_700Bold"
	}
})
export default PetCategory