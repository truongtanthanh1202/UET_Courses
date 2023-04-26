import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';

import styles from './style';

const data = [
  {label: 'English', value: 'English'},
  {label: 'Vietnamese', value: 'Vietnamese'},
];

const HomeHeader = props => {
  const [language, setLanguage] = React.useState('English');
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
      }}>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="menu-outline" size={24} color="#333" />
      </TouchableOpacity>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={{width: 20, height: 20, tintColor: 'white'}}
        labelField="label"
        valueField="value"
        value={language}
        data={data}
        placeholder="English"
        renderLeftIcon={() => (
          <View style={{paddingRight: 4}}>
            <Ionicons name="globe-outline" size={20} color="white" />
          </View>
        )}
        onChange={item => {
          setLanguage(item.value);
        }}
      />
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;
