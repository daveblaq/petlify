import { View, Text, StyleSheet,Image, Platform, ImageBackground } from 'react-native'
import React from 'react';
import COLORS from '../const/colors';

const PetCategory = ({ image, pet, type="PRIMARY", focused }) => {
	return (
	  <>
			<View style={styles.container}>
				<ImageBackground source={require('../../../assets/images/cat.png')} style={[styles.content, styles[`cat_${type}`]]} resizeMode="cover" >
					<Image source={image}  style={styles.image} resizeMode="contain" />
				</ImageBackground>
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
		marginVertical: 20,
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