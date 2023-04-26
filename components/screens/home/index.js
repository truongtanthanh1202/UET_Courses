import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';

import styles from './style';

const tags = [
  'All Courses',
  'Computer Science',
  'UI/UX design',
  'Software Engineer',
  'Devops',
  'Clouds',
  'Cyber Sercurity',
];

const courses = [
  {
    id: 1,
    description: 'Build and Deploy a website',
    id_teacher: 'Viet Anh Nguyen',
    thumbnail:
      'https://d3mxt5v3yxgcsr.cloudfront.net/courses/7475/course_7475_image.jpg',
    rate: 5,
  },
  {
    id: 2,
    description: 'Devops with AWS',
    id_teacher: 'Microsoft',
    thumbnail:
      'https://cdn.mindmajix.com/courses/aws-devops-training-110620.png',
    rate: 4.5,
  },
  {
    id: 3,
    description: 'Designing UI-UX',
    id_teacher: 'Google',
    thumbnail:
      'https://product.hstatic.net/200000350979/product/11815017442_1943370500_cd6c686ef9444a1788fc4f63fce0cac8_master.jpg',
    rate: 4.5,
  },
  {
    id: 4,
    description: 'Software Engineering',
    id_teacher: 'Viet Hoang Nguyen',
    thumbnail:
      'https://m.media-amazon.com/images/M/MV5BNTFjZmE1ZmQtZTBiNi00M2U3LWFhZjktMDM2NThlYTA3OTJiXkEyXkFqcGdeQXVyODQyNDI4ODg@._V1_.jpg',
    rate: 4,
  },
];

const data = [
  {label: 'English', value: 'English'},
  {label: 'Vietnamese', value: 'Vietnamese'},
];

const renderHomeHeader = props => {
  const [language, setLanguage] = React.useState('English');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
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
};

const renderTopSection = () => {
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingLeft: 24,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 20,
          color: '#222',
          letterSpacing: 0.2,
          marginRight: '16%',
          marginBottom: 12,
        }}>
        What do you like to learn today? Search below.
      </Text>

      <View
        style={{
          marginBottom: 20,
          marginRight: 24,
          justifyContent: 'center',
          paddingBottom: 4,
          borderBottomColor: '#333',
          borderBottomWidth: 1,
        }}>
        <TextInput
          placeholder="Search course"
          style={{
            height: 40,
            fontFamily: 'Poppins-Medium',
            color: '#333',
            fontSize: 14,
            paddingLeft: 40,
            paddingVertical: 8,
          }}></TextInput>
        <Ionicons
          name="search-outline"
          size={26}
          color="#333"
          style={{position: 'absolute', left: 0, top: 6}}></Ionicons>
      </View>

      <ScrollView
        horizontal={true}
        style={{minHeight: 30, backgroundColor: 'white', marginRight: 8}}>
        {tags.map((tag, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.6}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 8,
                backgroundColor: '#3787ff',
                minWidth: 80,
                borderRadius: 12,
                marginRight: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  color: 'white',
                }}>
                {tag}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Home = ({route, navigation}) => {
  const {role} = route.params;
  const {email} = route.params;
  const {password} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
      />
      <ScrollView>
        {/* Header section */}
        {renderHomeHeader()}

        {/* Top section */}
        {renderTopSection()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
