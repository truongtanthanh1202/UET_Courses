import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//custom components
import Splash1SVG from '../../../../assets/img/splash1_svg.js';
import DownArrow from '../../../../assets/img/downArrow.js';

//style components
import styles from './style.js';

const Splash2 = ({navigation}) => {
  const handleConitnueScreen = () => {
    navigation.navigate('Splash3');
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
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
