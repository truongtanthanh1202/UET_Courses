import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  Platform,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';
import {ProfileValue, ProgressBar} from '../../../atoms';

const Profile = ({route, navigation}) => {
  const {role} = route.params;
  const {email} = route.params;
  const {password} = route.params;
  const {fullname} = route.params;
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 4,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: '#333',
            fontFamily: 'Poppins-Medium',
          }}>
          Profile
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Setting', {
              role: role,
              email: email,
              password: password,
              fullname: fullname,
            });
          }}>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    );
  }
  function renderProfileCard() {
    return (
      <View>
        {/* Detail */}
        <View>
          <View
            style={{
              width: Platform.OS === 'ios' ? 100 : 120,
              height: Platform.OS === 'ios' ? 100 : 120,
              borderRadius: Platform.OS === 'ios' ? 50 : 60,
              alignSelf: 'center',
              overflow: 'hidden',
            }}>
            <Image
              source={require('../../../../assets/img/avata_student_default.jpg')}
              resizeMode="cover"
              style={{
                width: Platform.OS === 'ios' ? 100 : 120,
                height: Platform.OS === 'ios' ? 100 : 120,
              }}></Image>
          </View>
          <Text style={styles.text1}>{fullname}</Text>
          <View style={{width: 240, alignSelf: 'center'}}>
            <ProgressBar
              progress="60%"
              containerStyle={{maginTop: 10}}></ProgressBar>
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 4,
              fontFamily: 'Poppins-Medium',
              color: '#333',
            }}>
            60% Complete your profile
          </Text>
        </View>
      </View>
    );
  }
  function renderProfileSection1() {
    return (
      <View style={styles.profileSectionContainer}>
        <ProfileValue
          label="Your progress"
          value="Completed 9/10 courses"
          labelStyle={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            textAlign: 'center',
          }}
          valueStyle={{
            color: 'white',
            fontSize: 14,
            textAlign: 'center',
            fontFamily: 'Poppins-Medium',
          }}
        />
        <View style={{margin: 14}}></View>

        <View
          style={{
            minHeight: 200,
            backgroundColor: '#3787ff',
            borderRadius: 20,
          }}>
          {/* Label and Value */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              marginVertical: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontFamily: 'Montserrat-Medium',
                }}>
                Profile Information
              </Text>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ChangeProfile', {
                    role: role,
                    email: email,
                    password: password,
                    fullname: fullname,
                  });
                }}>
                <Ionicons
                  name="create-outline"
                  size={24}
                  marginLeft={100}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.profileInforItem}>
              <Text style={styles.titleInputField}>Your full name</Text>
              <TextInput
                style={styles.inputField}
                value={fullname}
                editable={false}
                placeholderTextColor="black"></TextInput>
            </View>

            <View style={styles.profileInforItem}>
              <Text style={styles.titleInputField}>Email address</Text>
              <TextInput
                style={styles.inputField}
                value={email}
                editable={false}
                placeholderTextColor="black"></TextInput>
            </View>

            <View style={styles.profileInforItem}>
              <Text style={styles.titleInputField}>Password</Text>
              <TextInput
                style={styles.inputField}
                secureTextEntry={true}
                value={password}
                editable={false}
                placeholderTextColor="black"></TextInput>
            </View>
          </View>
        </View>
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

        <ScrollView>
          {/* Profile Card */}
          {renderProfileCard()}
        </ScrollView>
      </View>

      <View style={styles.below}>
        <ScrollView style={{marginHorizontal: 20, marginTop: 14}}>
          {/* Profile Section 1 */}
          {renderProfileSection1()}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
