import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../const/colors';

const TopNavigation = () => {
  return (
	<View style={styles.nav}>
		  <View style={styles.greeting}>
			  <Text style={styles.user}>
				  Hi Daisy
			  </Text>
			  <Text style={styles.location}><Ionicons name="md-location-outline" size={24} color={COLORS.BLUE} />Boston, Newyork</Text>
		  </View>
		  
			<Image source={require('../../../assets/images/icons/bell.png')}  style={styles.icon} />
		  
	</View>
  )
}

const styles = StyleSheet.create({
	nav: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: Platform.OS == "ios" ? 20 : 70,
		marginHorizontal: 20,
	},
	greeting: {
	
    justifyContent: 'center',
		
	textAlign: "left"
	},
	user: {
		fontSize: Platform.OS == "ios" ? 28 : 45,
		fontWeight: "bold",
		color: "#272932",
		letterSpacing: 1,
	},
	location: {
		fontSize: Platform.OS == "ios" ? 18 : 20,
		fontWeight: "600",
		color: COLORS.FADED,
		paddingVertical: 5,
	},
	icon: {
		height: 35,
		width: 35, 
	}
})

export default TopNavigation