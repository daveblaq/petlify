import { View, Text, StyleSheet, Image, Platform, Dimensions } from 'react-native';
import React from 'react';
import COLORS from '../const/colors';
import { Divider } from 'react-native-elements';

const { width, height} = Dimensions.get("window");

const PetView = ({ pet, image, breed, distance, price }) => {
	return (
	  <>
			<View style={styles.cardContent}>
				
				<Image source={image} style={styles.image} resizeMode="cover" />
				

				<View style={styles.contentContainer}>
					<View style={styles.Container}>
					<View>
						<Text style={styles.pet}>{pet}</Text>
						<Text style={styles.breed}>{breed}</Text>
						<Text style={styles.distance}>{distance}</Text>
					</View>
					
						<View>
							<Image source={require('../../../assets/images/icons/like-inactive.png')} style={styles.icon} resizeMode="contain" />
							</View>
				</View>
					<View>
						<Text style={styles.price}>{'\u20A6'}{price} </Text>
				</View>

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
		marginVertical: 20,
		marginHorizontal: 20,
		width: '60%'
	},
	Container: {
		flexDirection: "row",
		justifyContent: "space-between"
		
	},
	icon: {
		height: 26,
		width: 26,
	},
	pet: {
		fontSize: Platform.OS == 'ios' ? 18 : 24,
		color: "#63687E",
		fontFamily: "Quicksand_700Bold",
	},
	breed: {
		paddingVertical: 4,
		fontSize: Platform.OS == 'ios' ? 14 : 20,
		fontFamily: "Nunito_400Regular",
		color: COLORS.FADED,
		
	},
	distance: {
		
		fontSize: Platform.OS == 'ios' ? 16 : 20,
		fontFamily: "Quicksand_500Medium",
		color: COLORS.BLUE,
	}, 
	price: {
		fontFamily: "Quicksand_700Bold",
		fontSize: Platform.OS == 'ios' ? 18 : 24,
		paddingTop: 15,
		color: "#272932",
		
	}
})

export default PetView