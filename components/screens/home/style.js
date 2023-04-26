import React from 'react';
import {StyleSheet, Platform} from 'react-native';

const shadow =
  Platform.OS === 'ios'
    ? {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }
    : {elevation: 4, shadowColor: '#171717'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4f1f9',
  },
  describeContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 24,
  },
  describeContainerLeft: {
    flex: 60,
    paddingLeft: 20,
  },
  describeContainerRigt: {
    flex: 40,
    alignItems: 'center',
  },
});

export default styles;
