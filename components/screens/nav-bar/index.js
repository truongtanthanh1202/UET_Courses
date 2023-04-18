import React, {useState, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Keyboard, Platform, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../home';
import Course from '../course';
import Search from '../search';
import {Profile, ChangePassword} from '../profile';

const Tab = createBottomTabNavigator();

const NavBar = ({route, navigation}) => {
  let {role} = route.params ?? 'student';
  let {email} = route.params ?? 'abc@gmail.com';
  let {password} = route.params ?? 'abcdef';
  let {fullname} = route.params ?? 'Thanh Truong';

  if (!role) role = 'student';
  if (!email) email = 'abc@gmail.com';
  if (!password) password = 'abcdef';
  if (!fullname) fullname = 'Thanh Truong';

  const [bottomMarginStatus, setbottomMarginStatus] = useState(12);
  useEffect(() => {
    const showNavBar = Keyboard.addListener('keyboardDidShow', () => {
      setbottomMarginStatus(0);
    });
    const hideNavBar = Keyboard.addListener('keyboardDidHide', () => {
      setbottomMarginStatus(12);
    });

    return () => {
      showNavBar.remove();
      hideNavBar.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          bottom: bottomMarginStatus,
          marginHorizontal: 12,
          paddingHorizontal: 20,
          elevation: 0.2,
          backgroundColor: '#3788ff',
          borderRadius: 50,
          minHeight: Platform.OS === 'ios' ? 60 : 68,
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
                justifyContent: 'center',
                flexDirection: 'row',
                // backgroundColor: 'lightblue',
              }}>
              <Ionicons name={iconName} size={30} color="white" />
              <Text
                style={{
                  color: focused ? 'white' : 'white',
                  marginLeft: 8,
                  marginTop: 12,
                  fontSize: 14,
                  lineHeight: 26,
                  fontFamily: 'Poppins-Medium',
                  borderTopColor: '#E4F1F9',
                  borderTopWidth: 1.8,
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                  borderTopEndRadius: 2,
                  borderTopStartRadius: 2,
                }}>
                {focused == true && route.name}
              </Text>
            </View>
          );
        },
        // '#3788ff',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={{
          role: role,
          email: email,
          password: password,
          fullname: fullname,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        initialParams={{
          role: role,
          email: email,
          password: password,
          fullname: fullname,
        }}
      />
      <Tab.Screen
        name="Course"
        component={Course}
        initialParams={{
          role: role,
          email: email,
          password: password,
          fullname: fullname,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{
          role: role,
          email: email,
          password: password,
          fullname: fullname,
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
