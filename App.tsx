import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens component
import Splash1 from './components/screens/splash/splash1';
import Splash2 from './components/screens/splash/splash2';
import Splash3 from './components/screens/splash/splash3/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash1'>
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;