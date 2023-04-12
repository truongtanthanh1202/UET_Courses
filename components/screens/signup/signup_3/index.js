import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUp_3 = ({route, navigation}) => {
  const {role} = route.params;
  const {email} = route.params;
  const {password} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Ionicons
          name="checkmark-circle"
          size={60}
          color="#3787FF"
          style={styles.icon}
        />

        <Text style={styles.title}>Success</Text>
        <Text style={styles.describe}>
          Congratulations, you have complete your registration
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('NavBar', {
              role: {role},
              email: {email},
              password: {password},
            });
            alert(`Role: ${role}, Email: ${email}, Password: ${password}`);
          }}>
          <Text style={styles.textInnerButton}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp_3;
