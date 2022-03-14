import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, Platform, TouchableOpacity, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Feather } from "@expo/vector-icons";
import COLORS from "../components/const/colors";
import PetView from "../components/Home/Petview/PetView";
import TopNavigation from '../components/Home/TopNavigation';
import SearchBox from "../components/Home/SearchBox";
import PetCategory from "../components/Home/PetCategory";


const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation}) => {

	
	
	return (
	 
    <SafeAreaView>
		  <StatusBar backgroundColor={COLORS.BACKGROUND_COLOR} />
		  
		  <View style={styles.imageContainer}>
			  <ImageBackground source={require("../../assets/images/bg.png")} style={{ flex: 1 }}>
					<TopNavigation />
					<SearchBox />
					<View style={styles.categoriesContainer}>
						<ScrollView horizontal={true} vertical={false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
						<PetCategory pet="Dog" image={require('../../assets/images/icons/pets/dog.png')} />
							<PetCategory pet="Cats" image={require('../../assets/images/icons/pets/cats')} />
							<PetCategory pet="Rabbits" image={require('../../assets/images/icons/pets/rabbits.png')} />
							
							</ScrollView>
						</View>
			  </ImageBackground>
       
      </View>
		  <View style={styles.Content}>
			  <View style={styles.card}>
				  <View style={styles.cardContainer}>
					  <ScrollView horizontal={false} vertical={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
					  <PetView />
					  <PetView />
					  <PetView />
					  <PetView />
					  <PetView />
					  <PetView />
					  <PetView />
					  <PetView />
						  <PetView />
						  <PetView />
						  <PetView />
						  <PetView />
						  </ScrollView>
				</View>
			  </View>
       
			  </View>
			
    </SafeAreaView>
	
  );
};

const styles = StyleSheet.create({
  imageContainer: {
		height: "45%",
	  backgroundColor: COLORS.WHITE,
	
  },
  Content: {
	  height: "55%",
	  
},
card: {
	  backgroundColor: '#F2F4F7',
	 borderTopRightRadius: 50,
	  borderTopLeftRadius: 50,
	},
cardContainer: {
	
	marginHorizontal: 20,
	},
	categoriesContainer: {
	  marginLeft: 20,
  }
});



export default HomeScreen;


