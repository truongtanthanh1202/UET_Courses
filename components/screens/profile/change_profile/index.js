import React, {useState} from 'react';
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
  const {role} = route.params;
  const {email} = route.params;
  const {password} = route.params;
  const {fullname} = route.params;

  const [name, setName] = useState(fullname);
  const [textErrorName, setTextErrorName] = useState('');

  const gobackHandler = () => {
    navigation.goBack();
  };
  const saveHandler = () => {
    navigation.navigate('NavBar', {
      screen: 'Profile',
      params: {
        role: role,
        email: email,
        password: password,
        fullname: name,
      },
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
        <TouchableOpacity style={styles.btnBack} onPress={gobackHandler}>
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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputField}
            value={name}
            onChangeText={text => {
              setName(text);
              setTextErrorName(
                text.length > 4 ? '' : 'enter a valide fullname',
              );
            }}></TextInput>
          <Text style={styles.inputErrorText}>{textErrorName}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={gobackHandler}
          style={{
            height: 42,
            minWidth: 100,
            marginLeft: '24%',
            marginRight: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#000',
              paddingHorizontal: 16,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={saveHandler}
          style={{
            height: 42,
            minWidth: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3787ff',
            borderRadius: 20,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: '#fff',
              paddingHorizontal: 16,
            }}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangeProfile;
