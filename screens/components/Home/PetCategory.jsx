import { View, Text, StyleSheet,Image, Platform } from 'react-native'
import React from 'react';
import COLORS from '../const/colors';

const PetCategory = ({ pet, image }) => {
	return (
	  <>
			<View style={styles.container}>
				<View style={styles.content}>
	  <Image source={image}  style={styles.image} resizeMode="contain" />
				</View>
				<Text style={styles.text}>{pet}</Text>
				</View>
			
	  </>
  )
}


const styles = StyleSheet.create({
	container: {
		
		alignItems: "center",
		justifyContent: "center",
		
		
		width: 100,
		marginRight: 15,
		marginVertical: 10,
	},
	content: {
		backgroundColor: "#FCF0E9",
		padding: 15,
		borderRadius: 18,
		shadowColor: "rgba(196, 196, 196, 0.5)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3,
    elevation: 7,
	},
	image: {
		width: Platform.OS =='ios' ? 52 : 65,
		height: Platform.OS =='ios' ? 69 : 80,
	},
	text: {
		fontSize: Platform.OS == 'ios' ? 16 : 22,
		textAlign: "center",
		color: COLORS.FADED,
		paddingVertical: 10,
	}
})
export default PetCategory