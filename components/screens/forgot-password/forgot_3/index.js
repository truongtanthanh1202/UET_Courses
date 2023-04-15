import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  isValidEmail,
  isValidPassword,
  isConfirmPassword,
} from '../../../utilies/Validations';

import styles from './style';

const Forgot_3 = props => {
  const [textErrorPassword, setTextErrorPassword] = useState('');
  const [textErrorConfirmPassword, setTextErrorConfirmPassword] = useState('');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isValidationOK = () => {
    isValidPassword(password) == true && password === confirmPassword;
  };
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

        <Text style={styles.title}>Reset your password</Text>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mid}>
          <View>
            <TextInput
              style={styles.inputField}
              autoFocus={true}
              secureTextEntry={true}
              placeholder="Enter new password"
              placeholderTextColor="#70747e"
              onChangeText={text => {
                setTextErrorPassword(
                  isValidPassword(text) == true
                    ? ''
                    : 'Must contain at least 6 characters',
                );
                setPassword(text);
              }}></TextInput>
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                marginLeft: 32,
                marginRight: 20,
                marginVertical: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              {textErrorPassword}
            </Text>
          </View>

          <View>
            <TextInput
              style={styles.inputField}
              secureTextEntry={true}
              placeholder="Confirm password"
              placeholderTextColor="#70747e"
              onChangeText={text => {
                setTextErrorConfirmPassword(
                  isConfirmPassword(text, password) == true
                    ? ''
                    : 'Must match both password',
                );
                setConfirmPassword(text);
              }}></TextInput>
            <Text
              style={{
                color: 'red',
                fontSize: 12,
                marginLeft: 32,
                marginRight: 20,
                marginVertical: 10,
                fontFamily: 'Poppins-Regular',
              }}>
              {textErrorConfirmPassword}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttonContinue}
            disabled={isValidationOK == false}
            onPress={() => {
              Alert.alert(
                'Done',
                'You have successfully changed your password',
              );
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.textInnerBtnContinue}>Reset</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Forgot_3;
