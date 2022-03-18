import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../const/colors';
import Icon from 'react-native-remix-icon';

const TopNavigation = ({ name }) => {
  return (
	<View style={styles.nav}>
		  <View style={styles.greeting}>
			  <Text style={styles.user}>
				  Hi {name}
			  </Text>
			  <Text style={styles.location}><Icon name={"map-pin-line"} size={18} color={COLORS.BLUE} /> Boston, Newyork</Text>
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
		fontFamily: "Quicksand_700Bold",
		color: "#272932",
		letterSpacing: 1,
	},
	location: {
		fontSize: Platform.OS == "ios" ? 18 : 20,
		fontFamily: "Quicksand_500Medium",
		color: COLORS.FADED,
		paddingVertical: 5,
	},
	icon: {
		height: 35,
		width: 35, 
	}
})

export default TopNavigation