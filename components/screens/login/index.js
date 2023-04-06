import React from 'react';
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

const Login = () => {
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
                placeholderTextColor="black"></TextInput>
              <Ionicons
                name="mail-unread-outline"
                size={32}
                style={styles.inputIcon}
              />
            </View>
            <View style={{width: '100%'}}>
              <TextInput
                style={styles.inputField}
                // autoFocus={true}
                placeholder="Password"
                placeholderTextColor="black"></TextInput>
              <Ionicons
                name="eye-off-outline"
                size={32}
                style={styles.inputIcon}
              />
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

            <TouchableOpacity style={styles.buttonSignIn}>
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
                marginBottom: 16,
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
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
