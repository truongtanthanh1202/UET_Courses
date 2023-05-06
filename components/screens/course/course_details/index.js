import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Image, useWindowDimensions } from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';

import { Tabs } from 'react-native-collapsible-tab-view';

const courseVideo = require('./courseVideo.mp4');
const avatar = require('../../../../assets/img/avata_student_default.jpg');

const Overview = () => (
    <View style={{ flex: 1, marginHorizontal: 20, gap: 24, marginBottom: 48}}>
      <View style={{flexDirection: 'column', gap: 24, marginTop: 24}}>
        <Text style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>Introduction</Text>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Aliquam volutpat ut odio at euismod. Maecenas molestie quam vitae nulla tincidunt, non pretium ex accumsan</Text>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Quisque aliquam, arcu quis euismod tincidunt, ex nunc molestie urna, ut ultricies nisi felis id est.</Text>
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 16}}>
        <TouchableOpacity style={{width: '100%', backgroundColor: '#3787ff', alignItems: 'center', paddingVertical: 20, borderRadius: 32}}>
          <Text style={{fontSize: 18, color: 'white'}}> See more </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'column', gap: 24}}>
        <Text style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>Feedback</Text>
      </View>

      {/* Begin Feedback */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'column', paddingHorizontal: 52, paddingVertical: 24, backgroundColor: 'white', borderRadius: 24}}>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Ionicons name="star" size={18} color="#ff9d42" />
            <Text style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}> 4.7 </Text>
          </View>
          <Text style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold',}]}> Reviews </Text>
        </View>

        <View style={{flexDirection: 'column', paddingHorizontal: 52, paddingVertical: 24, backgroundColor: 'white', borderRadius: 24}}>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Ionicons name="person-outline" size={18} />
            <Text style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}> 753 </Text>
          </View>
          <Text style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}> Students </Text>
        </View>
      </View>

      {/* This is 3 mock comments */}
      <View style={{flexDirection: 'row', gap: 16, paddingRight: 8}}>
        <Image
          source={avatar}
          resizeMode="cover"
          style={{
            width: Platform.OS === 'ios' ? 40 : 48,
            height: Platform.OS === 'ios' ? 40 : 48,
            borderRadius: 32,
          }}
        >
        </Image>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, fontWeight: 'bold', color: 'black'}}>@mannes_sammy </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, fontWeight: 'bold', color: 'black'}}>31 mins ago </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>Quisque leo neque, venenatis eget lorem a, aliquam efficitur sapien.</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 16, paddingRight: 8}}>
        <Image
          source={avatar}
          resizeMode="cover"
          style={{
            width: Platform.OS === 'ios' ? 40 : 48,
            height: Platform.OS === 'ios' ? 40 : 48,
            borderRadius: 32,
          }}
        >
        </Image>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, fontWeight: 'bold', color: 'black'}}>@james </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, fontWeight: 'bold', color: 'black'}}>01 hour ago </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>Great course.</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 16, paddingRight: 8}}>
        <Image
          source={avatar}
          resizeMode="cover"
          style={{
            width: Platform.OS === 'ios' ? 40 : 48,
            height: Platform.OS === 'ios' ? 40 : 48,
            borderRadius: 32,
          }}
        >
        </Image>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, fontWeight: 'bold', color: 'black'}}>@mouni </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16, fontWeight: 'bold', color: 'black'}}>11 hours ago </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>Aliquam sodales elementum felis.</Text>
        </View>
      </View>
      {/* End Feedback */}

      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 16}}>
        <TouchableOpacity style={{width: '100%', backgroundColor: '#3787ff', alignItems: 'center', paddingVertical: 20, borderRadius: 32}}>
            <Text style={{fontSize: 18, color: 'white'}}> Load more </Text>
        </TouchableOpacity>
      </View>
          
      {/* Begin Comments */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>5 Comments</Text>
        <TouchableOpacity style={{backgroundColor: 'grey', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 16, borderRadius: 32}}>
          <Text style={{fontSize: 16, color: 'white'}}> Add comment </Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', gap: 16, paddingRight: 12}}>
        <Image
          source={avatar}
          resizeMode="cover"
          style={{
            width: Platform.OS === 'ios' ? 40 : 48,
            height: Platform.OS === 'ios' ? 40 : 48,
            borderRadius: 32,
          }}
        >
        </Image>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>@mouni </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>11 mins ago  .  Student</Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>How to get better at line? I am really stuck</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 16, paddingRight: 12}}>
        <Image
          source={avatar}
          resizeMode="cover"
          style={{
            width: Platform.OS === 'ios' ? 40 : 48,
            height: Platform.OS === 'ios' ? 40 : 48,
            borderRadius: 32,
          }}
        >
        </Image>
        <View style={{flexDirection: 'column'}}>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>@simon </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>32 mins ago  .  Student</Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>How can I upload img to cloud?</Text>
        </View>
      </View>
      {/* End Comments */}

    </View>
);

const mockLessons = [
  {
    id: 1,
    title:"Introduction to cimics\ndrawing course",
    thumbnail: 'https://img-b.udemycdn.com/course/750x422/1259404_72d4_21.jpg',
    description: 'Proin in erat ante. Ut dictum massa non tellus pulvinar, id pellentesque nunc hendrerit. Quisque iaculis ultrices dapibus. In nec dui et quam faucibus faucibus eget in tellus.'
  },
  {
    id: 2,
    title:"Lorem ipsum dolor sit amet",
    thumbnail: 'https://img-c.udemycdn.com/course/750x422/2400268_3fbb_4.jpg',
    description: 'Proin in erat ante. Ut dictum massa non tellus pulvinar, id pellentesque nunc hendrerit. Quisque iaculis ultrices dapibus. In nec dui et quam faucibus faucibus eget in tellus.'
  },
  {
    id: 3,
    title:"Curabitur euismod lacus lorem",
    thumbnail: 'https://the.ismaili/sites/default/files/styles/carousel_banner/public/picture-of-a-person-drawing-1.jpg?itok=CNvEhBYk',
    description: 'Proin in erat ante. Ut dictum massa non tellus pulvinar, id pellentesque nunc hendrerit. Quisque iaculis ultrices dapibus. In nec dui et quam faucibus faucibus eget in tellus.'
  },
  {
    id: 4,
    title:"Quisque leo neque",
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHb9l6LS6HfXxHsKx0J-QgCe5RzysV0yyhWQ&usqp=CAU',
    description: 'Proin in erat ante. Ut dictum massa non tellus pulvinar, id pellentesque nunc hendrerit. Quisque iaculis ultrices dapibus. In nec dui et quam faucibus faucibus eget in tellus.'
  },
]

const Lessons = () => (
  <View style={{ flex: 1, marginHorizontal: 20, gap: 16, marginBottom: 48, paddingTop: 32}}>
    {mockLessons.map((lesson, index) => {
      return (
        <View style={{flexDirection: 'column', gap: 12}}>
          <View style={{flexDirection: 'row', gap: 8, marginRight: 12}}>
            <TouchableOpacity >
              <Image source={{uri: lesson.thumbnail}} resizeMode="cover" style={{width: 150, height: 90}} />
            </TouchableOpacity>
            <View style={{flexDirection: 'column', justifyContent: 'space-between', paddingVertical: 4}}>
              <Text style={[styles.screenTitle, {fontSize: 16, fontWeight: 'bold'}]}>{lesson.title}</Text>
              <Text style={{fontFamily: 'Poppins-Medium', fontSize: 16}}>Lesson {index + 1} </Text>
            </View>
          </View>
          <View>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12, lineHeight: 20}}>{lesson.description}</Text>
          </View>
        </View>
      )
    })}
  </View>
);

const CourseDetails = ({route, navigation}) => {
  const { email } = route.params;
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
          <Text style={styles.screenTitle}> Details </Text>
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

  const renderVideoPlayer = props => {
    return (
      <View>
        <Video
          // disableFocus
          source={courseVideo}
          repeat={true}
          paused={true}
          style={{height: 200, width: 420}}
          resizeMode='cover'
          poster={'https://cdn.shopify.com/s/files/1/0519/4383/3779/products/63695-rear_1024x1024.jpg?v=1626989681'}
          controls={true}
        />
      </View>
    )
  }

  const renderIntroduction = props => {
    return (
      <View style={{flexDirection: 'column', paddingHorizontal: 16, paddingVertical: 16, marginTop: 12, gap: 8}}>
        <View style={{backgroundColor: '#3788ff', maxWidth: 68, alignItems: 'center', paddingHorizontal: 6, paddingVertical: 6}}>
          <Text style={{color: 'white'}}> HOT </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center', gap: 8}}>
          <Image
            source={avatar}
            resizeMode="cover"
            style={{
              width: Platform.OS === 'ios' ? 40 : 48,
              height: Platform.OS === 'ios' ? 40 : 48,
              borderRadius: 32,
            }}
          >
          </Image>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 18, color: 'black', fontWeight: '500'}}> Anny Morriarty </Text>
        </View>

        <Text style={{fontFamily: 'Poppins-Medium', fontSize: 24, color: 'black', fontWeight: 'bold'}}>
          Comic drawing essential for everyone!
        </Text>

        <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center', gap: 48}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="time-outline" size={24} />
            <Text> 1 hour 30 min</Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="videocam-outline" size={24} />
            <Text> 12 Lessons </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: 8, alignItems: 'center', gap: 72}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="star-outline" size={24} />
            <Text>4.7 (753) </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="person-outline" size={24} />
            <Text> 2K students </Text>
          </View>
        </View>

        <Text style={{fontFamily: 'Poppins-Relugar', fontSize: 16, marginTop: 12}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus vitae leo quis faucibus. Aliquam sit amet magna rhoncus, tincidunt lorem quis, ultricies nibh.
        </Text>

      </View>
    )
  }

  const realHeader = () => {
    return (
      <>
        {renderHeader()}
        {renderVideoPlayer()}

        {renderIntroduction()}
      </>
    )
  }

  const renderBody = props => {
    const HEADER_HEIGHT = 350;
    return (
      <Tabs.Container
        headerHeight={HEADER_HEIGHT}
        // lazy
        headerContainerStyle={{backgroundColor: '#e4f1f9'}}
        renderHeader={realHeader}
      >
        <Tabs.Tab name={'Overview'}>
          <Tabs.ScrollView>
            <Overview />
          </Tabs.ScrollView>
        </Tabs.Tab>

        <Tabs.Tab name={'Lessons'}>
          <Tabs.ScrollView>
            <Lessons />
          </Tabs.ScrollView>
        </Tabs.Tab>
      </Tabs.Container>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
      />
      {/* <ScrollView style={{maxHeight: 650}}>
        {renderHeader()}
        {renderVideoPlayer()}

        {renderIntroduction()}
      </ScrollView> */}
      {renderBody()}

    </SafeAreaView>
  )
}

export default CourseDetails;
