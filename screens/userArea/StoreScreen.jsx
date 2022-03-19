import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, Platform, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Feather } from "@expo/vector-icons";
import COLORS from "../components/const/colors";
import TopNavigation from '../components/Store/TopNavigation';
import SearchBox from "../components/Home/SearchBox";



const { width, height } = Dimensions.get("window");

const StoreScreen = ({ navigation }) => {
	const [catergoryIndex, setCategoryIndex] = React.useState(0);
	
  const categories = ['Food', 'Medicines', 'Accessories'];

	const categoryitems = [
		{
			id: 1,
			text: 'All Pets',
			image: require('../../assets/images/icons/pets/paw.png'),
			type: "PRIMARY",
		},
		{
			id: 2,
			text: 'Dogs',
			image: require('../../assets/images/icons/pets/dog.png'),
			type: "TERTIARY",
		},
		{
			id: 3,
			text: 'Cats',
			image: require('../../assets/images/icons/pets/cat.png'),
			type: "TERTIARY",
		},
		{
			id: 4,
			text: 'Rabbits',
			image: require('../../assets/images/icons/pets/rabbit.png'),
			type: "TERTIARY",
		},
		{
			id: 5,
			text: 'Birds',
			image: require('../../assets/images/icons/pets/bird.png'),
			type: "TERTIARY",
		},
		{
			id: 6,
			text: 'Fish',
			image: require('../../assets/images/icons/pets/fish.png'),
			type: "TERTIARY",
		},
	];
	

	const animals = [
		{
			id: 1,
			image: require('../../assets/images/rabbits.png'),
			pet: 'Potter Pete',
			breed: 'Nowergian Breed',
			distance: '16km Away',
			price: '50,000'
		},
		{
			id: 2,
			image: require('../../assets/images/dog.png'),
			pet: 'Potter Pete',
			breed: 'German Shepherd',
			distance: '16km Away',
			price: '50,000'
		},
			{
			id: 3,
			image: require('../../assets/images/fish.png'),
			pet: 'Potter Pete',
			breed: 'Nowergian Breed',
			distance: '16km Away',
			price: '50,000'
		},
		{
			id: 4,
			image: require('../../assets/images/dog.png'),
			pet: 'Potter Pete',
			breed: 'Nowergian Breed',
			distance: '16km Away',
			price: '50,000'
		},
		{
			id: 5,
			image: require('../../assets/images/rabbits.png'),
			pet: 'Potter Pete',
			breed: 'Nowergian Breed',
			distance: '16km Away',
			price: '50,000'
		},
		{
			id: 6,
			image: require('../../assets/images/fish.png'),
			pet: 'Potter Pete',
			breed: 'Nowergian Breed',
			distance: '16km Away',
			price: '50,000'
		},
		
	]
	return (
	 
    <SafeAreaView>
		  <StatusBar backgroundColor={COLORS.BACKGROUND_COLOR} />
		   <ScrollView vertical={true} horizontal={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
		  <View style={styles.imageContainer}>
			  <ImageBackground source={require("../../assets/images/bg.png")} style={{ flex: 1 }}>
					<TopNavigation name="Daisy" />
					<SearchBox />
					  <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setCategoryIndex(index)} style={[
                styles.bg,
                catergoryIndex === index && styles.bgSelected,
              ]}>
            <Text
              style={[
                styles.categoryText,
                catergoryIndex === index && styles.categoryTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
			  </ImageBackground>
       
      </View>
		  <View style={styles.Content}>
			  <View style={styles.card}>
				  <View style={styles.cardContainer}>
					  
				</View>
			  </View>
       
			  </View>
			 </ScrollView>
    </SafeAreaView>
	
  );
};

const styles = StyleSheet.create({
  imageContainer: {
		flex: 1,
		backgroundColor: COLORS.WHITE,
	  
	
  },
  Content: {
	  flex: 1,
	  backgroundColor: COLORS.WHITE,
	  borderRadius: 24,
	  
	},
	bg: {
		backgroundColor: COLORS.BG_FADED,
		paddingVertical: Platform.OS == 'ios' ? 5 : 10,
		paddingHorizontal: 15,
		borderRadius: 25,
	},
	bgSelected: {
		backgroundColor: COLORS.BASE,
	},
card: {
	  backgroundColor: COLORS.WHITE,
	 borderTopRightRadius: 50,
	  borderTopLeftRadius: 50,
	},
cardContainer: {
	
	marginHorizontal: 20,
	marginTop: 15,
	},

categoryContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
	justifyContent: 'space-between',
	marginHorizontal:30,
  },
	categoryText: {fontSize: Platform.OS == "ios" ? 16 : 18, color: '#858993', fontFamily: "Quicksand_500Medium"},
  categoryTextSelected: {
    color: COLORS.WHITE,
    paddingBottom: 5,
    
  },
	
});



export default StoreScreen;


