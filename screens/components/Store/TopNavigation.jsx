import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../const/colors';
import Icon from 'react-native-remix-icon';

const TopNavigation = () => {
  return (
	<View style={styles.nav}>
		  <View style={styles.greeting}>
			  <Text style={styles.user}>
				 Pet Shop
			  </Text>
			  <Text style={styles.location}>Shopping for your pet? </Text>
		  </View>
		  
			<Image source={require('../../../assets/images/icons/shopping-cart.png')}  style={styles.icon} />
		  
	</View>
  )
}

const styles = StyleSheet.create({
	nav: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: Platform.OS == "ios" ? 30 : 70,
		marginHorizontal: Platform.OS == "ios" ? 20 : 25,
	},
	greeting: {
	justifyContent: 'center',
	textAlign: "left"
	},
	user: {
		fontSize: Platform.OS == "ios" ? 28 : 45,
		fontFamily: "Quicksand_700Bold",
		color: "#272932",
		letterSpacing: 1,
	},
	location: {
		fontSize: Platform.OS == "ios" ? 18 : 20,
		fontFamily: "Quicksand_500Medium",
		color: COLORS.FADED,
		paddingVertical: 8,
	},
	icon: {
		height: 35,
		width: 35, 
	}
})

export default TopNavigation