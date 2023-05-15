import React from 'react';
import { Text, View, Image, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyCourse from './my_course';
import Schedule from './schedule';
import styles from './style';

import ConferenceSpeaker from '../../../assets/img/conference_speaker';
import UIDesign from '../../../assets/img/ui_design';

import { Dropdown } from 'react-native-element-dropdown';

const Tab = createMaterialTopTabNavigator();

const data = [
  {label: 'English', value: 'English'},
  {label: 'Vietnamese', value: 'Vietnamese'},
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
          flex: 18,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}>
        <TouchableOpacity style={{flex: 35}} onPress={() => {}}>
          <Ionicons name="menu-outline" size={28} color="#333" />
        </TouchableOpacity>
        <Dropdown
          style={{
            flex: 40,
            backgroundColor: '#3787ff',
            height: 26,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 4,
          }}
          placeholderStyle={{
            fontSize: 14,
            color: 'white',
            fontFamily: 'Poppins-Medium',
            textAlign: 'center',
          }}
          selectedTextStyle={{
            fontSize: 14,
            color: 'white',
            fontFamily: 'Poppins-Medium',
            textAlign: 'center',
          }}
          iconStyle={{width: 20, height: 20, tintColor: 'white'}}
          labelField="label"
          valueField="value"
          value={language}
          data={data}
          placeholder="English"
          renderLeftIcon={() => (
            <View style={{paddingRight: 4}}>
              <Ionicons name="globe-outline" size={18} color="white" />
            </View>
          )}
          onChange={item => {
            setLanguage(item.value);
          }}
        />
        <View style={{flex: 35, height: 28}}>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => {}}>
            <Ionicons name="notifications-outline" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function renderNavigators() {
    return (
      <View style={{
        flex: 7,
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      <View style={styles.top}>
        {renderHeader()}
        {/* {renderNavigators()} */}
        <View style={{paddingHorizontal: 18, flex: 8, marginBottom: 4}}>
          {renderNavigators()}
        </View>
      </View>

      <View style={styles.mid}>
        {/* Ugly hardcode!*/}
        <View style={[styles.allCourse, { marginTop: -24 }]}>
          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'column',}}
            onPress={() => {
              navigation.navigate('CourseDetails', {
                role,
                email,
                password,
                fullname,
              })
            }}
          >
            <View style={{flex: 2 , flexDirection: 'row'}}>
              <ConferenceSpeaker width='100%' height='100%' />
            </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#3787ff', borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
              <View style={{flex: 1, flexDirection: 'column', margin: 8}}>
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.courseText}> Marketing </Text>
                  <Text style={styles.courseText}> $50 </Text>
                </View>
                <Text style={[styles.courseText, styles.smallText]}> By: Salim </Text>
              </View>
              <View style={styles.horizontalDivider} />
              <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', margin: 8}}>
                <Text style={[styles.courseText, styles.smallText]}> 50 Lessons </Text>
                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="star" size={24} color="orange" />
                  <Text style={[styles.courseText, styles.smallText]}> 4.5 </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1, flexDirection: 'column',}}
            onPress={() => {
              navigation.navigate('CourseDetails', {
                role,
                email,
                password,
                fullname,
              })
            }}
          >
            <View style={{flex: 2 , flexDirection: 'row'}}>
              <UIDesign width='100%' height='100%' />
            </View>
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#3787ff', borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
              <View style={{flex: 1, flexDirection: 'column', margin: 8}}>
                <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={styles.courseText}> UI/UX Design </Text>
                  <Text style={styles.courseText}> $80 </Text>
                </View>
                <Text style={[styles.courseText, styles.smallText]}> By: Salim </Text>
              </View>
              <View style={styles.horizontalDivider} />
              <View style={{flex: 0, flexDirection: 'row', justifyContent: 'space-between', margin: 8}}>
                <Text style={[styles.courseText, styles.smallText]}> 34 Lessons </Text>
                <View style={{flex: 0, flexDirection: 'row', alignItems: 'center'}}>
                  <Ionicons name="star" size={24} color="orange" />
                  <Text style={[styles.courseText, styles.smallText]}> 4.5 </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Course Details */}
        <View style={styles.courseDetails}>
          <View style={styles.verticalLine} />
          <View style={styles.verticalWrap}>
            <View style={styles.itemWrap}>
              <View style={styles.firstPoint}></View>
              <View style={{ marginLeft: 10, flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}> All Lesson of Marketing </Text>
                <Text> Here 52 lessons and complete 32 lessons </Text>
              </View>
            </View>
            <View style={styles.itemWrap}>
              <View style={styles.firstPoint}></View>
              <View style={{ marginLeft: 10, flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}> What is marketing?  56 Minutes </Text>
              </View>
            </View>
            <View style={styles.itemWrap}>
              <View style={styles.firstPoint}></View>
              <View style={{ marginLeft: 10, flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}> What is your definition of marketing? 10 Min </Text>
              </View>
            </View>
            <View style={styles.itemWrap}>
              <View style={styles.firstPoint}></View>
              <View style={{ marginLeft: 10, flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}> What are 3 Definitions of marketing? 56 Min </Text>
              </View>
            </View>
            <View style={styles.itemWrap}>
              <View style={styles.firstPoint}></View>
              <View style={{ marginLeft: 10, flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}> What are 4 types of marketing? 56 Min </Text>
              </View>
            </View>
            <View style={styles.itemWrap}>
              <View style={styles.firstPoint}></View>
              <View style={{ marginLeft: 10, flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}> Why the marketing is important? 56 Min </Text>
              </View>
            </View>
            <View style={styles.itemWrap}>
              <View style={styles.firstPoint}></View>
              <View style={{ marginLeft: 10, flex: 1, gap: 4 }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}> Why is marketing neccesary? 56 Min </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Course;
