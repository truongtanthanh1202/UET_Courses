import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E4F1F9',
  },
  top: {
    flex: 15,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  mid: {
    flex: 75,
    alignItems: 'center',
  },
  bottom: {
    flex: 10,
    backgroundColor: 'lightyellow',
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
  },
  textInnerButton: {
    color: 'white',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});

export default styles;
