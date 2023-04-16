import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 35,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
});

export default styles;
