import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1F9',
  },
  top: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 50,
  },
  bottom: {
    flexDirection: 'row',
    flex: 50,
  },
  left: {
    flex: 55,
  },
  right: {
    flex: 45,
  },
  svg: {
    backgroundColor: 'white',
  },
  text: {
    color: '#333',
    fontSize: 20,
  },
});

export default styles;
