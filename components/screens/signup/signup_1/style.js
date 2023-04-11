import React from 'react';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f1f9',
    paddingHorizontal: 20,
  },
  top: {
    flex: 26,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mid: {
    flex: 40,
    // backgroundColor: 'lightyellow',
  },
  bottom: {
    flex: 34,
    // backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTop: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  button: {
    width: '100%',
    height: Platform.OS === 'ios' ? 60 : 68,
    backgroundColor: 'white',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  buttonSignUpMail: {
    backgroundColor: '#5197FE',
    width: '100%',
    height: Platform.OS === 'ios' ? 60 : 68,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    marginRight: 12,
  },
  textInnerButton: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  textInnerBtnSignIn: {
    color: '#3787FF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  textInnerBtnSignUp: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;
