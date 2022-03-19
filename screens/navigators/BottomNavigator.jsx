import React from 'react';
import {View, TouchableOpacity, Text, Platform} from 'react-native';
import HomeScreen from '../userArea/HomeScreen';
import StoreScreen from '../userArea/StoreScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLORS from '../components/const/colors';
import Icon from 'react-native-remix-icon';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        backgroundColor: COLORS.WHITE,
        borderColor: "grey",
        alignItems: 'center',
	   	justifyContent: 'space-between',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
		
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
		const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const TabBarIcon = options.tabBarIcon;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(route.name)}
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}} key={index}>
            <TabBarIcon
              size={30}
              color={isFocused ? COLORS.BASE : "#858993"}
					focused={isFocused}
					label={label}
            />
			
				{isFocused && (
					<>
              <View
                style={{
                  height: 2,
                  width: 50,
                  backgroundColor: COLORS.BASE,
                  position: 'absolute',
                  top: -20,
                  
                }}
					/>
					
					</>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
			tabBarIcon: ({ focused, color, size, label }) => (
				<>
				<Icon name={focused ? "home-5-fill" : "home-5-line"} size={Platform.OS == 'ios' ? 25: size} color={color} />
				<Text style={{ color: focused ? COLORS.BASE : '#858993',  fontFamily: "Quicksand_500Medium", fontSize: Platform.OS =='ios' ? 16 : 18 }}>
              {label}
            </Text>
				</>
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={StoreScreen}
        options={{
			tabBarIcon: ({ focused, color, size, label }) => (
				<>
				<Icon name={focused ? "shopping-bag-3-fill" : "shopping-bag-3-line"} size={Platform.OS == 'ios' ? 25: size} color={color} />
				<Text style={{ color: focused ? COLORS.BASE : '#858993',  fontFamily: "Quicksand_500Medium", fontSize: Platform.OS =='ios' ? 16 : 18 }}>
              {label}
            </Text>
				</>
          ),
        }}
      />
      <Tab.Screen
        name="Vet"
        component={HomeScreen}
        options={{
			tabBarIcon: ({ focused, color, size, label }) => (
				<>
				<Icon name={focused ? "pulse-line" : "pulse-line"} size={Platform.OS == 'ios' ? 25: size} color={color} />
				<Text style={{ color: focused ? COLORS.BASE : '#858993',  fontFamily: "Quicksand_500Medium", fontSize: Platform.OS =='ios' ? 16 : 18 }}>
              {label}
            </Text>
				</>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
			tabBarIcon: ({ focused, color, size, label }) => (
				<>
				<Icon name={focused ? "user-3-fill" : "user-3-line"} size={Platform.OS == 'ios' ? 25: size} color={color} />
				<Text style={{ color: focused ? COLORS.BASE : '#858993',  fontFamily: "Quicksand_500Medium", fontSize: Platform.OS =='ios' ? 16 : 18 }}>
              {label}
            </Text>
				</>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;