import React from 'react';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4F1F9',
  },
  top: {
    flex: 26,
    justifyContent: 'center',
  },
  mid: {
    flex: 74,
  },
  btnBack: {
    marginTop: 40,
    marginHorizontal: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBack: {},
  title: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    marginHorizontal: 28,
    marginTop: 12,
  },
  inputField: {
    height: Platform.OS === 'ios' ? 56 : 64,
    backgroundColor: 'white',
    marginHorizontal: 28,
    borderRadius: 30,
    paddingHorizontal: 20,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    justifyContent: 'center',
    marginBottom: 4,
  },
  buttonContinue: {
    height: Platform.OS === 'ios' ? 52 : 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: '#5197FE',
    marginHorizontal: 28,
    marginTop: 40,
  },
  textInnerBtnContinue: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2,
  },
});

export default styles;
