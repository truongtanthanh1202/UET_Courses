import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Lock from '../../../assets/img/lock';
import styles from './style';
import Google from '../../../assets/icon/google';

import {isValidEmail, isValidPassword} from '../../utilies/Validations';

const Login = props => {
  const [KeyboardIsShow, setKeyboardIsShow] = useState(false);
  // Validate email/password
  const [textErrorEmail, setTextErrorEmail] = useState('');
  const [textErrorPassword, setTextErrorPassword] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValidationOK = () =>
    email.length >= 0 &&
    password.length >= 0 &&
    isValidEmail(email) == true &&
    isValidPassword(password) == true;

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardIsShow(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardIsShow(false);
    });
  });
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1, width: '100%'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Lock width="80" height="80"></Lock>

            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.describe}>
              A handful of model sentence structures
            </Text>

            <View style={{width: '100%'}}>
              <TextInput
                style={styles.inputField}
                autoFocus={true}
                placeholder="Email id"
                placeholderTextColor="black"
                onChangeText={text => {
                  setTextErrorEmail(
                    isValidEmail(text) == true
                      ? ''
                      : 'Please enter valid email',
                  );
                  setEmail(text);
                }}></TextInput>
              <Ionicons
                name="mail-unread-outline"
                size={32}
                style={styles.inputIcon}
              />
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginLeft: 32,
                  marginBottom: 10,
                }}>
                {textErrorEmail}
              </Text>
            </View>
            <View style={{width: '100%'}}>
              <TextInput
                style={styles.inputField}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                onChangeText={text => {
                  setTextErrorPassword(
                    isValidPassword(text) == true
                      ? ''
                      : 'Password must be at least 6 characters',
                  );
                  setPassword(text);
                }}></TextInput>
              <Ionicons
                name="eye-off-outline"
                size={32}
                style={styles.inputIcon}
              />
              <Text
                style={{
                  color: 'red',
                  fontSize: 12,
                  marginLeft: 32,
                  marginBottom: 10,
                }}>
                {textErrorPassword}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                alert('Navigate to Forgot Password Screen');
              }}>
              <Text
                style={{
                  color: '#5297fe',
                  textDecorationLine: 'underline',
                  marginLeft: '68%',
                  marginBottom: 24,
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              disabled={isValidationOK() == false}
              style={[
                styles.buttonSignIn,
                {
                  backgroundColor:
                    isValidationOK == false ? '#5097ff' : '#3787ff',
                },
              ]}
              onPress={() => {
                alert(`Email = ${email}, Password = ${password}`);
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                  marginTop: 2,
                }}>
                Sign in
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 500,
                marginBottom: 12,
              }}>
              ( or )
            </Text>

            <View
              style={{
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Google width="28" height="28" style={styles.icon}></Google>
              <TouchableOpacity
                onPress={() => {
                  alert('Login with Google');
                }}>
                <Text
                  style={{
                    margin: 8,
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 600,
                    marginLeft: 10,
                  }}>
                  Sign in with Google
                </Text>
              </TouchableOpacity>
            </View>

            {KeyboardIsShow == false && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  padding: 20,
                }}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => {
                    alert('Navigate to Sigup');
                  }}>
                  <Text
                    style={{
                      color: '#5297fe',
                      textDecorationLine: 'underline',
                    }}>
                    {' '}
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
