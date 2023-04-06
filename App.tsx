import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens component
import { Splash1, Splash2, Splash3} from './components/screens/splash';
import NavBar from './components/screens/nav-bar';
import Login from './components/screens/login';
import { SignUp_1 } from './components/screens/signup/index.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp_1" component={SignUp_1} />
      </Stack.Navigator>
      {/* <NavBar></NavBar> */}
    </NavigationContainer>
  );
};

export default App;