import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {isValidEmail} from '../../../utilies/Validations';

import styles from './style';

const Forgot_1 = props => {
  const [textErrorEmail, setTextErrorEmail] = useState('');
  const [email, setEmail] = useState('');
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

        <Text style={styles.title}>Enter your email</Text>
      </View>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mid}>
          <View>
            <TextInput
              style={styles.inputField}
              autoFocus={true}
              placeholder="email address"
              placeholderTextColor="#70747e"
              onChangeText={text => {
                setTextErrorEmail(
                  isValidEmail(text) == true
                    ? ''
                    : 'The email address you provided is not associated with your account',
                );
                setEmail(text);
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
              {textErrorEmail}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.buttonContinue}
            disabled={isValidEmail(email) == false}
            onPress={() => {
              props.navigation.navigate('Forgot_2');
            }}>
            <Text style={styles.textInnerBtnContinue}>Sent email</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Forgot_1;
