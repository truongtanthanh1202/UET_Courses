import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Google from '../../../../assets/icon/google';
import Facebook from '../../../../assets/icon/facebook';

import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUp_1 = props => {
  function handlerToLogin() {
    props.navigation.navigate('Login');
  }
  function continueSigup() {
    props.navigation.navigate('SignUp_2');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textTop}>Welcome!</Text>
        <Text style={styles.textTop}>Sign up to continue!</Text>
      </View>
      <View style={styles.mid}>
        <TouchableOpacity style={styles.button}>
          <Google width="28" height="28" style={styles.icon}></Google>
          <Text style={styles.textInnerButton}> Sign Up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Facebook width="28" height="28" style={styles.icon}></Facebook>
          <Text style={styles.textInnerButton}>Sign Up with Facebook</Text>
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            fontFamily: 'Poppins-Medium',
            marginBottom: 20,
            color: '#585d69',
          }}>
          or
        </Text>

        <TouchableOpacity
          style={styles.buttonSignUpMail}
          onPress={continueSigup}>
          <Text style={styles.textInnerBtnSignUp}>Sign up with email</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            marginBottom: 12,
            color: '#383838',
          }}>
          Already have an account?
        </Text>

        <TouchableOpacity style={styles.button} onPress={handlerToLogin}>
          <Text style={[styles.textInnerBtnSignIn]}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp_1;
