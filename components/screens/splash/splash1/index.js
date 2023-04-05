import React from 'react';
import {Text, View, Image, SafeAreaView, StatusBar} from 'react-native';

//assets component
import icon from '../../../../assets/icon/icon';

//styles component
import styles from './style.js';

const Splash1 = ({navigation}) => {
  const handleNextScreen = () => {
    navigation.navigate('Splash2');
    // console.log('navigation');
  };
  setTimeout(handleNextScreen, 5000);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.wrapper}>
        <View style={styles.inner}>
          <Image source={icon.splash1IMG} onLoad={handleNextScreen}></Image>
          <Text style={styles.appName}>UET Courses</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash1;
