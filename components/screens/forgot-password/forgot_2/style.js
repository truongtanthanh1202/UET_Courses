import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f1f9',
    paddingHorizontal: 20,
  },
  title: {},
  descript1: {},
  descript2: {},
  image: {},
  buttonContinue: {
    height: Platform.OS === 'ios' ? 52 : 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: '#3787FF',
    marginHorizontal: 20,
    marginTop: 20,
    width: '100%',
  },
  textInnerBtnContinue: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2,
  },
  buttonLogin: {
    height: Platform.OS === 'ios' ? 52 : 58,
    borderRadius: 28,
    justifyContent: 'center',
    alignItem: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,
    width: '100%',
  },
  textInnerBtnLogin: {
    color: '#3787FF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    marginTop: 2,
  },
});

export default styles;
