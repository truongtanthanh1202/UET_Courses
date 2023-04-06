import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Keyboard, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../home';
import Course from '../course';
import Search from '../search';
import Profile from '../profile';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  const [bottomMarginStatus, setbottomMarginStatus] = useState(20);
  useEffect(() => {
    const showNavBar = Keyboard.addListener('keyboardDidShow', () => {
      setbottomMarginStatus(0);
    });
    const hideNavBar = Keyboard.addListener('keyboardDidHide', () => {
      setbottomMarginStatus(20);
    });

    return () => {
      showNavBar.remove();
      hideNavBar.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: bottomMarginStatus,
          left: 12,
          right: 12,
          elevation: 0.2,
          backgroundColor: '#3788ff',
          borderRadius: 50,
          minHeight: Platform.OS === 'ios' ? 72 : 88,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          size = Platform.OS === 'ios' ? 20 : 28;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Course') {
            iconName = focused ? 'terminal' : 'terminal-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <View
              style={{
                alignItems: 'center',
              }}>
              <Ionicons name={iconName} size={size} color="white" />
              <Text
                style={{
                  color: focused ? 'white' : 'white',
                }}>
                {route.name}
              </Text>
            </View>
          );
        },
        // '#3788ff',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Course" component={Course} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default NavBar;
