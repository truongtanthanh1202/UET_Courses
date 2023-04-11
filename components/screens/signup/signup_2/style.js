import React from 'react';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4F1F9',
  },
  dropdown: {
    marginHorizontal: 28,
    paddingHorizontal: 20,
    height: Platform.OS === 'ios' ? 56 : 64,
    backgroundColor: 'white',
    borderRadius: 30,
    marginBottom: 24,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  buttonContinue: {
    height: Platform.OS === 'ios' ? 52 : 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: '#5197FE',
    marginHorizontal: 28,
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
