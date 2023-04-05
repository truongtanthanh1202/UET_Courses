import React from 'react';
import {Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4f1f9',
      }}>
      <Ionicons name="search-outline" size={32} />
      <Text>Search</Text>
    </View>
  );
};

export default Search;
