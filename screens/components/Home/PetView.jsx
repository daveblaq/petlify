import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import React from 'react';
import COLORS from '../const/colors';
import { Divider } from 'react-native-elements';


const PetView = ({ pet, image, breed, distance, price}) => {
	return (
	  <>
			<View style={styles.cardContent}>
				<View style={styles.imageContainer}>
				<Image source={image} style={styles.image} resizeMode="cover" />
				</View>
				<View style={styles.contentContainer}>
					<View>
						<Text style={styles.pet}>{pet}</Text>
						<Text style={styles.breed}>{breed}</Text>
						<Text style={styles.distance}>{distance}</Text>
						<Text style={styles.price}>{'\u20A6'}{price} </Text>
					</View>
					
						
					<Image source={require('../../../assets/images/icons/like-inactive.png')} style={styles.icon} resizeMode="contain"/>
				</View>
				

				

	  </View>
			<Divider horizontal={true} color={"#EBEDF1"} width={2} />
			</>
  )
}

const styles = StyleSheet.create({
	cardContent: {
		height: Platform.OS == 'ios' ? 140 : 170,
		width: '100%',
		backgroundColor: COLORS.WHITE,
		borderRadius: 24,
		marginBottom: 20,
		marginTop: 20,
		
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
	
	image: {
		height: Platform.OS == 'ios' ? 140 : 170,
		maxWidth: Platform.OS == 'ios' ? 140 : 150,
		borderTopLeftRadius: 24,
		borderBottomLeftRadius: 24,
		borderWidth: 2,
		borderColor: "#CCD4E0",
		
	},
	contentContainer: {
		paddingVertical: 15,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		width: Platform.OS == 'ios' ? '60%' : '65%',
		
		
	},
	icon: {
		height: 28,
		width: 28,
	},
	pet: {
		fontSize: Platform.OS == 'ios' ? 18 : 24,
		color: "#63687E",
		fontFamily: "Quicksand_700Bold",
	},
	breed: {
		paddingVertical: 4,
		fontSize: Platform.OS == 'ios' ? 14 : 20,
		fontFamily: "Quicksand_500Medium",
		color: COLORS.FADED,
		
	},
	distance: {
		paddingTop: 5,
		fontSize: Platform.OS == 'ios' ? 16 : 20,
		fontFamily: "Quicksand_500Medium",
		color: COLORS.BLUE,
	}, 
	price: {
		textAlign: "right",
		fontFamily: "Quicksand_700Bold",
		fontSize: Platform.OS == 'ios' ? 18 : 24,
		paddingVertical: 8,
		color: "#272932",
	}
})

export default PetView