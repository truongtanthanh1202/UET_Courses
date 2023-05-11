import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Screens component
import { Splash1, Splash2, Splash3} from './components/screens/splash';
import NavBar from './components/screens/nav-bar';
import Login from './components/screens/login';
import { SignUp_1, SignUp_2, SignUp_3 } from './components/screens/signup';
import { Forgot_1, Forgot_2, Forgot_3 } from './components/screens/forgot-password';
import { ChangePassword, ChangeProfile, Setting } from './components/screens/profile';
import MyCourse from './components/screens/course/my_course';
import Timetable from './components/screens/timetable';

import CourseDetails from './components/screens/course/course_details';
import Lesson from './components/screens/course/lesson';

import { ModalPortal } from 'react-native-modals';
import Search2 from './components/screens/search/search_2';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp_1" component={SignUp_1} />
        <Stack.Screen name="SignUp_2" component={SignUp_2} />
        <Stack.Screen name="SignUp_3" component={SignUp_3} />
        <Stack.Screen name="Forgot_1" component={Forgot_1} />
        <Stack.Screen name="Forgot_2" component={Forgot_2} />
        <Stack.Screen name="Forgot_3" component={Forgot_3} />
        <Stack.Screen name="NavBar" component={NavBar}/>

        {/* Code cua anh Son  */}
        {/* <Stack.Screen name="MyCourse" component={MyCourse}/>
        <Stack.Screen name="Timetable" component={Timetable}/> */}

        <Stack.Screen name="MyCourse" component={MyCourse}/>
        <Stack.Screen name="Timetable" component={Timetable}/>

        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="ChangePassword" component={ChangePassword}/>
        <Stack.Screen name="ChangeProfile" component={ChangeProfile}/>

        <Stack.Screen name="CourseDetails" component={CourseDetails}/>
        <Stack.Screen name="Lesson" component={Lesson}/>

        <Stack.Screen name="Search2" component={Search2}/>


      </Stack.Navigator>
    </NavigationContainer>
    <ModalPortal />
    </>
  );
};

export default App;