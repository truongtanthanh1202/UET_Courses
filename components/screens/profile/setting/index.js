import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

const Setting = ({route, navigation}) => {
  const {fullname} = route.params;
  const {email} = route.params;
  const {password} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default Setting;
