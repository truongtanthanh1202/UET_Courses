import React from 'react';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E4F1F9',
  },
  top: {
    flex: 15,
    justifyContent: 'center',
  },
  mid: {
    flex: 75,
  },
  bottom: {
    flex: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnBack: {
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
  buttonChange: {
    backgroundColor: '#3787FF',
    height: 38,
    justifyContent: 'center',
    paddingHorizontal: 16,
    alignItems: 'center',
    borderRadius: 20,
    maxWidth: 200,
    alignSelf: 'center',
  },
  textInnerButton: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  inputContainer: {
    // backgroundColor: '#fff',
    marginHorizontal: 24,
    marginTop: 20,
  },
  inputField: {
    height: Platform.OS === 'ios' ? 48 : 56,
    paddingHorizontal: 4,
    borderBottomColor: '#555',
    borderBottomWidth: 1,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#444',
  },
  inputErrorText: {
    marginTop: 4,
    color: '#3787ff',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
});

export default styles;
