import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

//custom components
// import FrameSVG from '../../atoms/window-img/frameSVG';

//style components
import styles from './style.js';

const Splash2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {/* <FrameSVG Descript="Hello Hello"></FrameSVG> */}
        <Text style={styles.text}>Hello World</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.left}></View>
        <View style={styles.right}></View>
      </View>
    </View>
  );
};

export default Splash2;
