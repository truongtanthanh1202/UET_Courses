import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Poppins400,
  Poppins500,
  Poppins600,
  Poppins700,
} from '../../../../constant/fontStyle.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4F1F9',
  },
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 32,
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
    margin: 8,
  },
  appName: {
    color: 'black',
    marginTop: 16,
    fontSize: 17,
    color: '#3788ff',
    letterSpacing: 0.2,
    ...Poppins700,
  },
});

export default styles;
