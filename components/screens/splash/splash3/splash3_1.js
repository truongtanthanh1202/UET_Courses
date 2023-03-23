import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Modal,
  Alert,
} from 'react-native';
import Splash2_2SVG from '../../../../assets/img/splash2_1_svg.js';

//styles component
import styles from './style.js';

const Splash3_1 = props => {
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
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.descript}>{props.descript}</Text>
        </View>
      </View>
      <View style={[styles.bottom]}>
        <Text></Text>
      </View>
    </View>
  );
};

export default Splash3_1;
