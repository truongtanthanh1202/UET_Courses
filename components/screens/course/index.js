import React from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyCourse from './my_course';
import Schedule from './schedule';

const Tab = createMaterialTopTabNavigator();

const Course = () => {
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#e4f1f9',
    //   }}>
    //   <Ionicons name="terminal-outline" size={32} />
    //   <Text>Course</Text>
    // </View>
    <Tab.Navigator tabBarPosition='top'>
        <Tab.Screen name="MyCourse" component={MyCourse} />
        <Tab.Screen name="Schedule" component={Schedule} />
    </Tab.Navigator>
  );
};

export default Course;
