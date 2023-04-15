import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import EmailCapture from '../../../../assets/img/email_capture';
import styles from './style';

const Forgot_2 = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Check your email</Text>
      <Text style={styles.descript1}>
        We've sent a password recover instruction to your email
      </Text>

      <EmailCapture width="272" height="226" style={styles.image} />

      <TouchableOpacity
        style={styles.buttonContinue}
        onPress={() => {
          props.navigation.navigate('Forgot_3');
        }}>
        <Text style={styles.textInnerBtnContinue}>Reset password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        <Text style={styles.textInnerBtnLogin}>Navigate to Login</Text>
      </TouchableOpacity>

      <Text style={styles.descript2}>
        Didn't get any email? Check your spam folder and try again with a valid
        email
      </Text>
    </SafeAreaView>
  );
};

export default Forgot_2;
