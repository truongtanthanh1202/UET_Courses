import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 35,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 35,
  },
  below: {
    flex: 65,
    backgroundColor: '#e4f1f9',
  },
  text1: {
    textAlign: 'center',
    color: 'black',
    fontSize: 28,
    fontFamily: 'Poppins-Medium',
    marginBottom: 12,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  profileSectionContainer: {
    marginTop: 20,
    borderColor: '#3787ff',
  },
  profileInforItem: {
    marginTop: 12,
  },
  titleInputField: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'white',
    marginLeft: 4,
    marginBottom: 2,
  },
  inputField: {
    height: Platform.OS === 'ios' ? 48 : 48,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
    marginBottom: 4,
  },
});

export default styles;
