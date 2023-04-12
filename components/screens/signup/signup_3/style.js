import React from 'react';
import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 44,
    justifyContent: 'center',
    backgroundColor: '#E4F1F9',
  },
  wrapper: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
  },
  describe: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: Platform.OS === 'ios' ? 48 : 56,
    backgroundColor: '#3787FF',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  textInnerButton: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
});

export default styles;
