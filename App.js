import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pigs from './screens/Pigs';
import LandingPage from './screens/LandingPage';
//import CameraPage from './screens/CameraPage';

const Stack = createStackNavigator();

function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pigs">

        <Stack.Screen
          name="Pigs"
          component={Pigs}
        />

        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
        />

        {/* <Stack.Screen
          name="CameraPage"
          component={CameraPage}
        /> */}

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
