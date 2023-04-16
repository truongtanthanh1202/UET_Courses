import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

const Profile = ({route, navigation}) => {
  const {role} = route.params;
  const {email} = route.params;
  const {password} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons name="person-outline" size={32} />
      <Text>Profile {role}</Text>
      <Text>{email}</Text>
      <Text>{password}</Text>
    </SafeAreaView>
  );
};

export default Profile;
