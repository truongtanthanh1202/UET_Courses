import React from 'react';
import {Text, View, Image} from 'react-native';

//assets component
import icon from '../../../../assets/icon/icon';

//styles component
import styles from './style.js';

const Splash1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <Image source={icon.splash1IMG}></Image>
          <Text style={styles.appName}>UET Courses</Text>
        </View>
      </View>
    </View>
  );
};

export default Splash1;
