import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Modal,
  Alert,
  SafeAreaView,
} from 'react-native';
import Splash2_3SVG from '../../../../assets/img/splash2_3_svg.js';

//styles component
import styles from './style.js';

const Splash3_3 = props => {
  let visiblelity = props.visible;
  const handleToLogin = () => {
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
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.descript}>{props.descript}</Text>
        </View>
      </View>

      <View
        style={[styles.bottom, (marginHorizontal = 20), (marginVertical = 48)]}>
        <View style={styles.left}>
          <TouchableOpacity
            style={[styles.SignUpBtn]}
            onPress={handleToLogin}
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
  );
};

export default Splash3_3;
