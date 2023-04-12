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

import {
  isValidEmail,
  isValidPassword,
  isConfirmPassword,
} from '../../../utilies/Validations';

import styles from './style';

const data = [
  {label: 'Student', value: 'student'},
  {label: 'Teacher', value: 'teacher'},
];

const SignUp_2 = props => {
  // Validate role/email/password
  const [textErrorRole, setTextErrorRole] = useState('');
  const [textErrorEmail, setTextErrorEmail] = useState('');
  const [textErrorPass, setTextErrorPass] = useState('');
  const [textErrorConfirmPass, setTextConfirmPass] = useState('');

  const [value, setValue] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const isValidationOK = () =>
    email.length >= 0 &&
    password.length >= 0 &&
    value != null &&
    confirmPass === password &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  function handlerSignupSuccess() {
    props.navigation.navigate('SignUp_3', {
      role: value,
      email: email,
      password: password,
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
              // console.log(value);
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
            {textErrorRole}
          </Text>

          <View>
            <TextInput
              style={styles.inputField}
              autoFocus={false}
              placeholder="email address"
              placeholderTextColor="black"
              onChangeText={text => {
                setTextErrorRole(value === null ? 'please select a role' : '');
                setTextErrorEmail(
                  isValidEmail(text) == true ? '' : 'Please enter valid email',
                );
                setEmail(text);
              }}></TextInput>
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                marginLeft: 56,
                marginBottom: 8,
                fontFamily: 'Poppins-Regular',
              }}>
              {textErrorEmail}
            </Text>
          </View>

          <View>
            <TextInput
              style={styles.inputField}
              autoFocus={false}
              placeholder="password"
              placeholderTextColor="black"
              secureTextEntry={true}
              onChangeText={text => {
                setTextErrorPass(
                  isValidPassword(text) == true
                    ? ''
                    : 'Password must be at least 6 characters',
                );
                setPassword(text);
              }}></TextInput>
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                marginLeft: 56,
                marginBottom: 8,
                fontFamily: 'Poppins-Regular',
              }}>
              {textErrorPass}
            </Text>

            <View>
              <TextInput
                style={styles.inputField}
                autoFocus={false}
                secureTextEntry={true}
                placeholder="confirm password"
                placeholderTextColor="black"
                onChangeText={text => {
                  setTextConfirmPass(
                    isConfirmPassword(text, password) == true
                      ? ''
                      : 'Password not matches',
                  );
                  setConfirmPass(text);
                }}></TextInput>
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginLeft: 56,
                  marginBottom: 8,
                  fontFamily: 'Poppins-Regular',
                }}>
                {textErrorConfirmPass}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            disabled={isValidationOK() == false}
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
