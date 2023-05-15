import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1F9',
  },
  top: {
    flex: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  mid: {
    flex: 90,
  },
  buttonBack: {
    flex: 33,
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  screenTitle: {
    textAlign: 'center',
    flex: 33,
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#333',
  },
  buttonSave: {
    flex: 33,
    height: 40,
    justifyContent: 'center',
  },
});

export default styles;
