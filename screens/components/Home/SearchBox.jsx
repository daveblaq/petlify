import { View, Text, StyleSheet, Image, TextInput, Platform } from 'react-native'
import React from 'react';
import COLORS from '../const/colors';

const SearchBox = ({	onFocus = () => { }, }) => {
	 const [isFocused, setIsFocused] = React.useState(false);
  return (
	<View style={[
          styles.searchBox,
          {
            borderColor: isFocused ? COLORS.BASE : "#F2F4F7",
          },
        ]}>
		  <Image source={require('../../../assets/images/icons/search.png')} style={styles.icon} resizeMode="contain" />
		  <TextInput style={styles.input} placeholder="Search for a pet"
        placeholderTextColor={COLORS.FADED}
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
			  }}
		 onBlur={() => setIsFocused(false)}  />
	  <Image source={require('../../../assets/images/icons/filter.png')} style={styles.icon} resizeMode="contain" />
	</View>
  )
}

const styles = StyleSheet.create({
	searchBox: {
		marginVertical: Platform.OS == "ios" ? 20 : 30,
		marginHorizontal: 20,
		height: 60,
		backgroundColor: "#F2F4F7",
		borderRadius: 20,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderWidth: 1.5,
	},
	icon: {
		height: 24,
		width: 24,
	}, 
	input: {
		width: '80%',
		fontSize: Platform.OS == 'ios' ? 16 : 20,
		fontFamily: "Quicksand_700Bold",
	}
})

export default SearchBox