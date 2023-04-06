import React from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Forgot_1 = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4f1f9',
      }}>
      <Ionicons name="home-outline" size={32} />
      <Text>Forgot password</Text>
    </View>
  );
};

export default Forgot_1;
