import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  BackHandler,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import styles from './style';

const data = [
  {label: 'Student', value: 'student'},
  {label: 'Teacher', value: 'student'},
];

const SignUp_2 = props => {
  const [value, setValue] = useState(null);

  function handlerSignupSuccess() {
    console.log('register success');
    props.navigation.navigate('SignUp_3');
  }

  return (
    <SafeAreaView style={styles.container}>
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

      <TouchableOpacity
        style={styles.buttonContinue}
        onPress={handlerSignupSuccess}>
        <Text style={styles.textInnerBtnContinue}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp_2;
