import React from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyCourse from './my_course';
import Schedule from './schedule';
import styles from './style';

import { Dropdown } from 'react-native-element-dropdown';

const Tab = createMaterialTopTabNavigator();

const data = [
  {label: 'English', value: 'English'},
  {label: 'French', value: 'French'},
];

const Course = ({route, navigation}) => {
  const {role} = route.params;
  const {email} = route.params;
  const {password} = route.params;
  const {fullname} = route.params;

  const [language, setLanguage] = React.useState('English');
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 4,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting', { // WARNING: Should not navigate to setting here
              role: role,
              email: email,
              password: password,
              fullname: fullname,
            });
          }}>
          <Ionicons name="menu-outline" size={24} color="#333" />
        </TouchableOpacity>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          labelField="label"
          valueField="value"
          value={language}
          data={data}
          placeholder="English"
          renderLeftIcon={() => (
            <View style={{paddingRight: 4}}>
              <Ionicons name="globe-outline" size={20} color='white'/>
            </View>
          )}
          onChange={item => {
            setLanguage(item.value)
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting', { // Turn notification on here!!
              role: role,
              email: email,
              password: password,
              fullname: fullname,
            });
          }}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    );
  }
  function renderNavigators() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#3787ff',
        gap: 12,
        justifyContent: 'space-around',
        padding: 4,
        borderRadius: 12,
      }}>
        <TouchableOpacity
          style={styles.buttonNavigator}
          onPress={() => {
            navigation.navigate('Timetable', { // Redirect to schedule?
              role: role,
              email: email,
              password: password,
              fullname: fullname,
            });
          }}>
            <Text style={{color: 'black', fontSize: 14, fontFamily: 'Poppins-Medium'}}>
              Class schedule
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNavigator}
          onPress={() => {
            navigation.navigate('MyCourse', { // Redirect to schedule?
              role: role,
              email: email,
              password: password,
              fullname: fullname,
            });
          }}>
          <Text style={{color: 'black', fontSize: 14, fontFamily: 'Poppins-Medium'}}>
              Studying
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonNavigator}
          onPress={() => {
            navigation.navigate('Setting', { // Redirect to schedule?
              role: role,
              email: email,
              password: password,
              fullname: fullname,
            });
          }}>
          <Text style={{color: 'black', fontSize: 14, fontFamily: 'Poppins-Medium'}}>
            Saved
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      <View style={styles.top}>
        {renderHeader()}
        <ScrollView>
          {renderNavigators()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Course;
