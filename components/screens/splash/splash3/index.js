import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Swiper from 'react-native-web-swiper';

//protected components
import Splash3_1 from './splash3_1.js';
import Splash3_2 from './splash3_2.js';
import Splash3_3 from './splash3_3.js';

const Splash3 = () => {
  return (
    <View style={styles.container}>
      <Swiper
        from={1}
        controlsProps={{
          prevPos: false,
          nextPos: false,
        }}>
        <View style={[styles.slider]}>
          <Splash3_1
            title="Numerous free all courses"
            descript="Free courses for you to find your way to learning"
            visible="true"></Splash3_1>
        </View>
        <View style={[styles.slider]}>
          <Splash3_2
            title="Quick and Easy learning"
            descript="Easy and fast at anytime to help you improve various skills"
            visiblel="false"></Splash3_2>
        </View>
        <View style={[styles.slider]}>
          <Splash3_3
            title="Create your old study plan"
            descript="Study according to the study plan, make study more motivated"
            visiblel="false"></Splash3_3>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1F9',
  },
  slider: {
    flex: 1,
  },
});

export default Splash3;
