import React, { useState, useRef } from 'react';
import { Animated, View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Image, useWindowDimensions, FlatList } from 'react-native';
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import DivBlocks from '../../../../assets/img/div_block';
import VideoViewer from '../../../atoms/VideoViewer';

const Tab = createMaterialTopTabNavigator();
const courseVideo = require('../../../../assets/video/courseVideo.mp4');

const allLessons = [
  {
    title: "Block model",
    duration: "15:40",
    thumbnail: 'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681'
  },
  {
    title: "Containers",
    duration: "15:55",
    thumbnail: 'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681'
  },
  {
    title: "Div Blocks, typography",
    duration: "25:15",
    thumbnail: 'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681'
  },
  {
    title: "Spacing, indents",
    duration: "24:15",
    thumbnail: 'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681'
  },
]

const Lesson = ({route, navigation}) => {
  const { lessonIndex } = route.params;
  const gobackHandler = () => {
    navigation.goBack();
  };

  const renderHeader = props => {
    return (
      <View style={styles.top}>
        <TouchableOpacity style={styles.buttonBack} onPress={gobackHandler}>
          <Ionicons name="chevron-back-outline" size={28} color="#333" />
        </TouchableOpacity>
        <View>
          <Text style={styles.screenTitle}> Lessons {lessonIndex} </Text>
        </View>
        <View style={{flex: 35, height: 28}}>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={() => {}}>
            <Ionicons name="bookmark-outline" size={28} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const LessonVideos = props => {
    return (
      <View style={{ flex: 1, backgroundColor: '#e4f1f9', gap: 20}}>
        <VideoViewer />
        <View>
          <Text style={[styles.screenTitle, {fontSize: 26, fontWeight: 'bold'}]}> Div Blocks, typography </Text>
        </View>

        <View style={{flex: 1, gap: 16}}>
          {allLessons.map((lesson, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={[styles.defaultLesson, index === 2 ? styles.selectedLessons : '']}
              >
                <View style={{flexDirection: 'row', gap: 24}}>
                  <Image source={{uri: lesson.thumbnail}} resizeMode="cover" style={{width: 50, height: 50}} />
                  <View style={{flexDirection: 'column', gap: 8}}>
                    <Text style={{fontFamily: 'Poppins-Medium', color: 'black', fontSize: 16}}> {lesson.title} </Text>
                    <Text> {lesson.duration} </Text>
                  </View>
                </View>
                <Ionicons name="checkmark-circle-outline" size={28} color={index < 2 ? "blue" : "white"}/>
              </TouchableOpacity>
            )
          })}
        </View>

        {/* Life is hacky :( */}
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 24, width: '100%'}}>
          <TouchableOpacity style={{width: '100%', backgroundColor: '#3787ff', alignItems: 'center', paddingVertical: 20, borderRadius: 32}}>
            <Text style={{fontSize: 18, color: 'white'}}> Next video </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const LessonTheory = props => {
    const data=[
      'Main menu',
      'Add elements panel',
      'Symbols panel',
      'Navigator panel',
      'Pages panel',
      'CMS panel',
      'Ecommerce panel',
      'Assets panel'
    ]
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#e4f1f9', gap: 12}}>
        <View style={{flexDirection: 'column', gap: 16}}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>Block-level Elements </Text>
          <Text style={{fontSize: 16, color: '#292930', lineHeight: 20}}>
            {"A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).\nTwo commonly used block elements are: <p> and <div>.\nThe <p> element defines a paragraph in an HTML document."}
          </Text>
        </View>

        <View>
          <DivBlocks />
        </View>

        <View style={{flexDirection: 'column', gap: 16}}>
          <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>The left toolbar </Text>
          <Text style={{fontSize: 16, color: '#292930', lineHeight: 20}}>
            {"The left toolbar provides a set of links and tools that allow you to structure your web project. The icons at the top of the left toolbar hide away many of the Designer panels:"}
          </Text>
          <View style={{paddingLeft: 12}}>
            {data.map((item, index) => {
              return (
                <Text style={{fontSize: 16, color: '#292930', lineHeight: 20}} key={index}>{`\u2022 ${item}`}</Text>
              )
            })
            }
          </View>

          <Text style={{fontSize: 16, color: '#292930', lineHeight: 20}}>
            {"The left toolbar provides a set of links and tools that allow you to structure your web project. The icons at the top of the left toolbar hide away many of the Designer panels:"}
          </Text>
        </View>

      </ScrollView>
    )
  }

  const LessonTask = props => {
    return (
      <View style={{ flex: 1, backgroundColor: '#e4f1f9'}}>
         <View style={{flexDirection: 'column', gap: 16}}>
          <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>Quiz on lectures </Text>
          <Text style={{fontSize: 16, color: '#292930', lineHeight: 20}}>
            {"Please checkout UET courses website for quizzes on these lectures!!"}
          </Text>
        </View>
      </View>
    )
  }

  const renderTabs = props => {
    return (
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Video" component={LessonVideos} />
        <Tab.Screen name="Theory" component={LessonTheory} />
        <Tab.Screen name="Task" component={LessonTask} />
      </Tab.Navigator>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
      />
      {renderHeader()}
      {renderTabs()}
    </SafeAreaView>
  )
}

export default Lesson;

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: 'white', borderRadius: 16, marginBottom: 18}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0.4)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', paddingVertical: 8}}
          >
            <Animated.Text style={ { opacity: opacity, fontSize: 18, color: 'black', fontFamily: 'Poppins-Regular' } }>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
