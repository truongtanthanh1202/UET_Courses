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
import {ProgressBar} from '../../atoms';
import CourseItem from '../../atoms/CourseItem';
import HomeMeeting from '../../../assets/img/home_meeting';

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
        height: 110, // Dont even ask!
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
        // paddingVertical: 20,
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

const renderOngoingCourses = ({ role, email, password, fullname, navigation }) => {
  return (
    <View style={{marginLeft: 24, marginTop: 20}}>
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          fontSize: 20,
          color: '#222',
          marginBottom: 16,
        }}>
        Ongoing Courses
      </Text>
      <ScrollView
        horizontal={true}
        style={{minHeight: 30, backgroundColor: 'transparent', marginRight: 8}}>
        {courses.map((course, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.6}
              style={{
                width: 280,
                backgroundColor: '#3787ff',
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 10,
                marginRight: 20,
              }}
              onPress={() => {
                navigation.navigate('CourseDetails', {
                  role,
                  email,
                  password,
                  fullname,
                })
              }}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 14,
                  color: '#fff',
                }}>
                {course.description}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 12,
                  marginBottom: 8,
                }}>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  {35} Lesson
                </Text>
                <Text
                  style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: 12,
                    color: '#fff',
                  }}>
                  {25} Lesson
                </Text>
              </View>

              <ProgressBar
                progress="60%"
                containerStyle={{
                  backgroundColor: 'white',
                }}
                progressStyle={{
                  backgroundColor: '#222',
                }}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const renderSuitableCourses = ({ role, email, password, fullname, navigation }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          height: 56,
        }}>
        <Text
          style={{
            position: 'absolute',
            left: 24,
            bottom: 0,
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: '#000',
          }}>
          Best for you
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 4,
            right: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Comportaa-Medium',
              fontSize: 16,
              color: '#3787ff',
            }}>
            see more
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: '#e4f1f8',
          minHeight: 220,
          paddingBottom: 8,
        }}>
        <ScrollView
          horizontal={true}
          style={{marginLeft: 10, marginVertical: 4}}>
          {courses.map(course => {
            return (
              <View key={course.id}>
                <CourseItem
                  source={course.thumbnail}
                  title={course.description}
                  owner={course.id_teacher}
                  rating={course.rate}
                  onPress={() => {
                    navigation.navigate('CourseDetails', {
                      role,
                      email,
                      password,
                      fullname,
                    })
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const renderPopularCourses = ({ role, email, password, fullname, navigation }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          height: 56,
        }}>
        <Text
          style={{
            position: 'absolute',
            left: 24,
            bottom: 0,
            fontFamily: 'Poppins-Medium',
            fontSize: 16,
            color: '#000',
          }}>
          Trending course
        </Text>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 4,
            right: 24,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Comportaa-Medium',
              fontSize: 16,
              color: '#3787ff',
            }}>
            see more
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: '#e4f1f8',
          minHeight: 220,
          paddingBottom: 8,
        }}>
        <ScrollView
          horizontal={true}
          style={{marginLeft: 10, marginVertical: 4}}>
          {courses.map(course => {
            return (
              <View key={course.id}>
                <CourseItem
                  source={course.thumbnail}
                  title={course.description}
                  owner={course.id_teacher}
                  rating={course.rate}
                  onPress={() => {
                    navigation.navigate('CourseDetails', {
                      role,
                      email,
                      password,
                      fullname,
                    })
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

const Home = ({route, navigation}) => {
  const {role} = route.params;
  const {email} = route.params;
  const {password} = route.params;
  const {fullname} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
      />
      <ScrollView style={{flex: 1}}>
        {/* Header section */}
        {renderHomeHeader()}

        {/* Top section */}
        {renderTopSection()}

        {/* Ongoing Courses section */}
        {renderOngoingCourses({ role, email, password, fullname, navigation })}

        <View style={styles.describeContainer}>
          <View style={styles.describeContainerLeft}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 20,
                color: '#333',
              }}>
              Meetup
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 14,
                color: '#333',
              }}>
              Off-line exchange of learning experiences
            </Text>
          </View>

          <View style={styles.describeContainerRigt}>
            <HomeMeeting width={100} height={100} />
          </View>
        </View>

        {/* Other course section */}
        {renderSuitableCourses({ role, email, password, fullname, navigation })}
        {renderPopularCourses({ role, email, password, fullname, navigation })}

        <View style={{height: 40}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
