import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import React from 'react';
import COLORS from '../const/colors';
import { Divider } from 'react-native-elements';

const PetView = ({ pet, image, breed}) => {
	return (
	  <>
			<View style={styles.cardContent}>
				<View style={styles.imageContainer}>
				<Image source={image} style={styles.image} resizeMode="cover" />
				</View>
				<View style={styles.contentContainer}>
					
					
						
				
				</View>

				

	  </View>
			<Divider horizontal={true} color={"#EBEDF1"} width={2} />
			</>
  )
}

const styles = StyleSheet.create({
	cardContent: {
		height: Platform.OS == 'ios' ? 140 : 150,
		width: '100%',
		backgroundColor: COLORS.WHITE,
		borderRadius: 24,
		marginVertical: 20,
		
		flexDirection: "row",
		 shadowColor: "rgba(196, 196, 196, 0.5)",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 7,
	},
	imageContainer: {

	},
	image: {
		height: Platform.OS == 'ios' ? 140 : 150,
		width: Platform.OS == 'ios' ? 140 : 150,
		borderTopLeftRadius: 24,
		borderBottomLeftRadius: 24,
	},
	contentContainer: {
		padding: 20,
		
		
	},
	
})

export default PetView