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
    paddingLeft: 24,
    flex: 55,
  },
  right: {
    flex: 45,
    paddingRight: 16,
    flexDirection: 'column',
  },
  flex50: {
    flex: 50,
  },
  svg: {
    marginTop: '50%',
    marginLeft: '20%',
  },
  title: {
    marginTop: '10%',
    color: '#060302',
    fontSize: 32,
    letterSpacing: 1,
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  describer: {
    marginTop: '10%',
    color: '#767372',
    fontSize: 24,
    ...Poppins700,
    letterSpacing: 2,
  },
  btnContinue: {
    backgroundColor: '#3787FF',
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '24%',
  },
  innerBtn: {
    color: 'white',
    fontSize: 16,
    ...Poppins700,
    letterSpacing: 1,
  },
});

export default styles;
