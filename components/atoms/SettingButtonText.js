import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingButtonText = ({iconLeft, label, iconRight, onPress}) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {iconLeft && (
          <Ionicons
            name={iconLeft}
            size={22}
            color="#fff"
            style={styles.leftContent}
          />
        )}
        {label && <Text style={styles.midContent}>{label}</Text>}
        {iconRight && (
          <Ionicons
            name={iconRight}
            size={22}
            color="#fff"
            style={styles.rightContent}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Platform.OS === 'ios' ? 48 : 56,
    backgroundColor: '#3787ff',
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 9,
  },
  leftContent: {
    flex: 10,
    textAlign: 'left',
  },
  midContent: {
    flex: 80,
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginTop: 4,
  },
  rightContent: {
    flex: 10,
    textAlign: 'right',
  },
});

export default SettingButtonText;
