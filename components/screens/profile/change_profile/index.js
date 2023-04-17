import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  Platform,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

const ChangeProfile = ({route, navigation}) => {
  const {fullname} = route.params;
  const {email} = route.params;
  const {password} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#E4F1F9"
      />
      <View style={styles.top}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => {
            navigation.goBack();
          }}>
          <Ionicons
            name="chevron-back-outline"
            size={32}
            color="black"
            style={styles.iconBack}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Profile setting</Text>
      </View>

      <View style={styles.mid}>
        <View
          style={{
            width: Platform.OS === 'ios' ? 100 : 120,
            height: Platform.OS === 'ios' ? 100 : 120,
            borderRadius: Platform.OS === 'ios' ? 50 : 60,
            alignSelf: 'center',
            overflow: 'hidden',
            marginBottom: 10,
          }}>
          <Image
            source={require('../../../../assets/img/avata_student_default.jpg')}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 100 : 120,
              height: Platform.OS === 'ios' ? 100 : 120,
            }}></Image>
        </View>

        <TouchableOpacity style={styles.buttonChange}>
          <Text style={styles.textInnerButton}>Change profile picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}></View>
    </SafeAreaView>
  );
};

export default ChangeProfile;
