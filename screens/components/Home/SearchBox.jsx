import { View, Text, StyleSheet, Image, TextInput, Platform, } from 'react-native'
import React, {useRef} from 'react';
import COLORS from '../const/colors';
import Icon from 'react-native-remix-icon';

const SearchBox = ({	onFocus = () => { }, }) => {
	const [isFocused, setIsFocused] = React.useState(false);
	
	

  return (
	<View style={[
          styles.searchBox,
          {
            borderColor: isFocused ? COLORS.BASE : "#F2F4F7",
          },
        ]}>
		  
		   <Icon name={"search-line"} size={24} color={isFocused ? COLORS.BASE : "#63687E"} />
		  <TextInput style={styles.input} placeholder="Search for a pet"
        placeholderTextColor={COLORS.FADED}
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
			  }}
		 onBlur={() => setIsFocused(false)}  />
	   <Icon name={"sound-module-line"} size={24} color={isFocused ? COLORS.BASE : "#63687E"} />
	</View>
  )
}

const styles = StyleSheet.create({
	searchBox: {
		marginVertical: Platform.OS == "ios" ? 20 : 30,
		marginHorizontal: 20,
		height: Platform.OS == "ios" ? 50 : 60,
		backgroundColor: "#F2F4F7",
		borderRadius: 20,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderWidth: 1,
	},
	icon: {
		height: 24,
		width: 24,
	}, 
	input: {
		width: '80%',
		fontSize: Platform.OS == 'ios' ? 16 : 20,
		fontFamily: "Nunito_400Regular",
	}
})

export default SearchBox