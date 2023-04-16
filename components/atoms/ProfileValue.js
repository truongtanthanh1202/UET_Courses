import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
const ProfileValue = ({label, labelStyle, value, valueStyle}) => {
  return (
    <View
      style={{
        backgroundColor: '#3787ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingVertical: 10,
      }}>
      {/* Label and Value */}
      <View
        style={{
          flex: 1,
          marginLeft: 20,
        }}>
        {label && <Text style={{...labelStyle}}>{label}</Text>}
        <Text style={{...valueStyle}}>{value}</Text>
      </View>
    </View>
  );
};
export default ProfileValue;
