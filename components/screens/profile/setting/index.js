import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SettingButtonText, SettingButtonBoolean} from '../../../atoms';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';

const Setting = ({route, navigation}) => {
  const {role} = route.params;
  const {email} = route.params;
  const {password} = route.params;
  const {fullname} = route.params;

  const [darkmodeState, setDarkModeState] = useState(false);

  const gobackHandler = () => {
    navigation.goBack();
  };

  const saveHandler = () => {
    navigation.navigate('NavBar', {
      screen: 'Profile',
      params: {},
      merge: true,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#E4F1F9"
      />
      <View style={styles.top}>
        <TouchableOpacity style={styles.buttonBack} onPress={gobackHandler}>
          <Ionicons name="chevron-back-outline" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.screenTitle}>Setting</Text>
        <TouchableOpacity style={styles.buttonSave} onPress={saveHandler}>
          <Text
            style={{
              color: '#3787ff',
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              textAlign: 'right',
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mid}>
        <ScrollView style={{flex: 1, marginHorizontal: 20}}>
          <SettingButtonBoolean
            iconLeft="moon"
            label="Dark mode"
            iconRight="chevron-forward-outline"
            isSelected={darkmodeState}
            onPress={() => {
              setDarkModeState(!darkmodeState);
            }}
          />
          <SettingButtonText
            iconLeft="notifications-outline"
            label="Notification"
            iconRight="chevron-forward-outline"
          />
          <SettingButtonText
            iconLeft="musical-notes-outline"
            label="Learning & sound setting"
            iconRight="chevron-forward-outline"
          />
          <SettingButtonText
            iconLeft="key-outline"
            label="Change password"
            iconRight="chevron-forward-outline"
            onPress={() => {
              navigation.navigate('ChangePassword');
            }}
          />
          <SettingButtonText
            iconLeft="help-outline"
            label="Help"
            iconRight="chevron-forward-outline"
          />
          <SettingButtonText
            iconLeft="exit-outline"
            label="Log out"
            iconRight="chevron-forward-outline"
          />
          <SettingButtonText
            label="Privacy Policy"
            iconRight="chevron-forward-outline"
          />
          <SettingButtonText
            label="Terms of Use"
            iconRight="chevron-forward-outline"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
