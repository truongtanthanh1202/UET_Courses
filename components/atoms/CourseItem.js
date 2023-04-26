import React from 'react';
import {View, Image, Text, TouchableOpacity, Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const shadow =
  Platform.OS === 'ios'
    ? {
        shadowColor: '#171717',
        shadowOffset: {width: -1, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
      }
    : {elevation: 2, shadowColor: '#171717'};

const CourseItem = props => {
  const _source =
    props.source ??
    'https://d3mxt5v3yxgcsr.cloudfront.net/courses/7475/course_7475_image.jpg';
  const _title = props.title ?? 'Create and Deploy a website';
  const _owner = props.owner ?? 'Thanh Truong';
  const _rating = props.rating ?? 5;
  const _member = props.member ?? 56;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        width: 150,
        height: 220,
        backgroundColor: 'white',
        marginHorizontal: 10,
        ...shadow,
      }}>
      <Image
        source={{
          uri: _source,
        }}
        resizeMode="cover"
        style={{
          width: 150,
          height: 120,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <View
        style={{
          width: 150,
          height: 100,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: '#3787ff',
        }}>
        <View style={{minHeight: 44, maxHeight: 52, paddingHorizontal: 8}}>
          <Text
            style={{fontFamily: 'Poppins-Medium', fontSize: 14, color: '#fff'}}>
            {_title}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: '#fff',
            paddingHorizontal: 8,
          }}>
          {_owner}
        </Text>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#fff',
            marginTop: 4,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 4,
            paddingHorizontal: 8,
            height: 20,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
            }}>
            {_member} Lesson
          </Text>
          <View
            style={{
              width: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="star" size={12} color="#ff9d42"></Ionicons>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
              }}>
              {' '}
              {_rating}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseItem;
