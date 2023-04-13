import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

const Forgot_1 = props => {
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

      <View style={styles.mid}>
        <View>
          <TextInput
            style={styles.inputField}
            autoFocus={true}
            placeholder="email address"
            placeholderTextColor="black"></TextInput>
          <Text
            style={{
              color: 'red',
              fontSize: 12,
              marginLeft: 32,
              marginRight: 20,
              marginVertical: 10,
              fontFamily: 'Poppins-Regular',
            }}>
            {/* {textErrorEmail} */}
            The email address you provided is not associated with your account
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonContinue}>
          <Text style={styles.textInnerBtnContinue}>Sent email</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Forgot_1;
