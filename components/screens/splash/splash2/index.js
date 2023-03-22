import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';

//custom components
import Splash1SVG from '../../../../assets/img/splash1_svg.js';
import DownArrow from '../../../../assets/img/downArrow.js';

//style components
import styles from './style.js';

const Splash2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Splash1SVG width="70%" height="70%"></Splash1SVG>
      </View>

      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text style={styles.text}>You learn</Text>
          <Text style={styles.text}>While sitting at home</Text>
        </View>

        <View style={styles.right}>
          <DownArrow width="100%" height="100%" style={styles.svg}></DownArrow>
          <TouchableHighlight>
            <Text style={styles.text}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default Splash2;
