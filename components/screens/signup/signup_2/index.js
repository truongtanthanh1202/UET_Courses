import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  BackHandler,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

const data = [
  {label: 'Student', value: 'student'},
  {label: 'Teacher', value: 'student'},
];

const SignUp_2 = props => {
  const [value, setValue] = useState(null);

  function handlerSignupSuccess() {
    console.log('register success');
    props.navigation.navigate('SignUp_3', {
      role: 'student',
      email: 'ttt@gmail.com',
      password: '123456',
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Ionicons
            name="chevron-back-outline"
            size={32}
            color="black"
            style={styles.iconBack}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Enter your details</Text>
      </View>
      <View style={styles.mid}>
        <ScrollView style={{flex: 1}}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Are you a ..."
            value={value}
            onChange={item => {
              setValue(item.value);
            }}
          />

          <Text
            style={{
              color: 'red',
              fontSize: 12,
              marginLeft: 56,
              marginBottom: 8,
              fontFamily: 'Poppins-Regular',
            }}>
            {/* {textErrorRole} */}
          </Text>

          <View>
            <TextInput
              style={styles.inputField}
              autoFocus={false}
              placeholder="email address"
              placeholderTextColor="black"></TextInput>
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                marginLeft: 56,
                marginBottom: 8,
                fontFamily: 'Poppins-Regular',
              }}>
              {/* {textErrorEmail} */}
            </Text>
          </View>

          <View>
            <TextInput
              style={styles.inputField}
              autoFocus={false}
              placeholder="password"
              placeholderTextColor="black"></TextInput>
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                marginLeft: 56,
                marginBottom: 8,
                fontFamily: 'Poppins-Regular',
              }}>
              {/* {textErrorPass} */}
            </Text>

            <View>
              <TextInput
                style={styles.inputField}
                autoFocus={false}
                placeholder="confirm password"
                placeholderTextColor="black"></TextInput>
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginLeft: 56,
                  marginBottom: 8,
                  fontFamily: 'Poppins-Regular',
                }}>
                {/* {textErrorConfirmPass} */}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.buttonContinue}
            onPress={handlerSignupSuccess}>
            <Text style={styles.textInnerBtnContinue}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SignUp_2;
