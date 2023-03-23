import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Alert} from 'react-native';

//custom components
import Splash1SVG from '../../../../assets/img/splash1_svg.js';
import DownArrow from '../../../../assets/img/downArrow.js';

//style components
import styles from './style.js';

const Splash2 = () => {
  const handleConitnueScreen = () => {
    Alert.alert(
      'Congratulations!',
      'Congratulations! You have successfully completed the course!',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Splash1SVG width="64%" height="64%"></Splash1SVG>
      </View>

      <View style={styles.bottom}>
        <View style={styles.left}>
          <Text style={styles.title}>You learn</Text>
          <Text style={styles.describer}>While sitting at home</Text>
        </View>

        <View style={styles.right}>
          <View style={[styles.flex50]}>
            <DownArrow
              width="50%"
              height="50%"
              color="#7d959d"
              style={[styles.svg]}></DownArrow>
          </View>
          <View style={[styles.flex50]}>
            <TouchableHighlight
              style={[styles.btnContinue]}
              onPress={handleConitnueScreen}>
              <Text style={styles.innerBtn}>Continue</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Splash2;
