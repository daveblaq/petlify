import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, Platform, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Feather } from "@expo/vector-icons";
import COLORS from "../components/const/colors";
import PetView from "../components/Home/PetView";
import TopNavigation from '../components/Home/TopNavigation';
import SearchBox from "../components/Home/SearchBox";
import PetCategory from "../components/Home/PetCategory";


const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation}) => {

	const categoryitems = [
		{
			id: 1,
			text: 'All Pets',
			image: require('../../assets/images/icons/pets/paw.png'),
			type: "PRIMARY",
		},
		{
			id: 2,
			text: 'Dog',
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
					<View style={styles.categoriesContainer}>
						<ScrollView horizontal={true} vertical={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
							{categoryitems.map((item, i) => (
								<PetCategory key={i} pet={item.text} type={item.type} image={item.image} />
							))}
						
							</ScrollView>
						</View>
			  </ImageBackground>
       
      </View>
		  <View style={styles.Content}>
			  <View style={styles.card}>
				  <View style={styles.cardContainer}>
					  <ScrollView horizontal={false} vertical={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
									{animals.map((animal, index) => (
										<PetView key={index} pet={animal.pet} image={animal.image} breed={animal.breed} distance={animal.distance} price={animal.price} />
										))}
					
						  </ScrollView>
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
	  backgroundColor: 'transparent',
	  borderRadius: 24,
	  
},
card: {
	  backgroundColor: '#F2F4F7',
	 borderTopRightRadius: 50,
	  borderTopLeftRadius: 50,
	},
cardContainer: {
	
	marginHorizontal: 20,
	marginTop: 10,
	},
	categoriesContainer: {
	  marginLeft: 20,
  }
});



export default HomeScreen;


