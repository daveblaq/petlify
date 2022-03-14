import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import COLORS from '../../const/colors';
import { Divider } from 'react-native-elements';

const PetView = () => {
	return (
	  <>
			<View style={styles.cardContent}>
				<View style={styles.imageContainer}>

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
		height: 141,
		width: '100%',
		backgroundColor: COLORS.WHITE,
		borderRadius: 24,
		marginVertical: 20,
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
})

export default PetView