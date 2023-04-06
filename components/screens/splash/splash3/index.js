import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-web-swiper';

import Splash2_1SVG from '../../../../assets/img/splash2_1_svg.js';
import Splash2_2SVG from '../../../../assets/img/splash2_2_svg.js';
import Splash2_3SVG from '../../../../assets/img/splash2_3_svg.js';

import styles from './style.js';

const Splash3 = ({navigation}) => {
  const handleToLogin = () => {
    navigation.navigate('Login');
  };
  const handleToSigup = () => {
    // navigation.navigate('Sigup');
    console.log('navigation to sigup');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#E4F1F9'}}>
      <Swiper
        from={0}
        controlsProps={{
          prevPos: false,
          nextPos: false,
        }}>
        <View style={{flex: 1}}>
          {/* Splash3_1 */}
          <View style={styles.container}>
            <View style={styles.top}>
              <TouchableHighlight
                style={[styles.button]}
                onPress={handleToLogin}
                activeOpacity={1}
                underlayColor="#E4F1F9">
                <Text style={styles.textInner}>Skip</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.mid}>
              <View
                style={{
                  flex: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 30,
                }}>
                <Splash2_1SVG
                  width="100%"
                  height="100%"
                  style={styles.svg}></Splash2_1SVG>
              </View>
              <View
                style={{
                  flex: 50,
                  alignItems: 'center',
                  marginHorizontal: 80,
                }}>
                <Text style={styles.title}>Numerous free all courses</Text>
                <Text style={styles.descript}>
                  Free courses for you to find your way to learning
                </Text>
              </View>
            </View>
            <View style={[styles.bottom]}>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          {/* Splash3_2 */}
          <View style={styles.container}>
            <View style={styles.top}>
              <TouchableHighlight
                style={[styles.button]}
                onPress={handleToLogin}
                activeOpacity={1}
                underlayColor="#E4F1F9">
                <Text style={styles.textInner}>Skip</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.mid}>
              <View
                style={{
                  flex: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 30,
                }}>
                <Splash2_2SVG
                  width="100%"
                  height="100%"
                  style={styles.svg}></Splash2_2SVG>
              </View>
              <View
                style={{
                  flex: 50,
                  alignItems: 'center',
                  marginHorizontal: 80,
                }}>
                <Text style={styles.title}>Quick and Easy learning</Text>
                <Text style={styles.descript}>
                  Easy and fast at anytime to help you improve various skills
                </Text>
              </View>
            </View>
            <View style={[styles.bottom]}>
              <Text></Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}>
          {/* Splash3_3 */}
          <SafeAreaView style={styles.container}>
            <View style={styles.top}>
              <TouchableHighlight>
                <Text></Text>
              </TouchableHighlight>
            </View>

            <View style={styles.mid}>
              <View
                style={{
                  flex: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 30,
                }}>
                <Splash2_3SVG
                  width="100%"
                  height="100%"
                  style={styles.svg}></Splash2_3SVG>
              </View>
              <View
                style={{
                  flex: 50,
                  alignItems: 'center',
                  marginHorizontal: 80,
                }}>
                <Text style={styles.title}>Create your old study plan</Text>
                <Text style={styles.descript}>
                  Study according to the study plan, make study more motivated
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.bottom,
                (marginHorizontal = 20),
                (marginVertical = 48),
              ]}>
              <View style={styles.left}>
                <TouchableOpacity
                  style={[styles.SignUpBtn]}
                  onPress={handleToSigup}
                  underlayColor="white">
                  <Text style={styles.innerBtnSigup}>Sign up</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.right}>
                <TouchableOpacity
                  style={[styles.LoginBtn]}
                  onPress={handleToLogin}
                  underlayColor="#3787FF">
                  <Text style={styles.innerBtnLogin}>Log in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Swiper>
    </View>
  );
};

export default Splash3;
