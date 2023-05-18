import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home.js';
import ClassInfo from './screens/ClassInfo.js';
import Confirmation from './screens/Confirmation.js';

const Stack = createStackNavigator();

function App() {
  return (
    /* Container for the navigation hierarchy */
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          /* Hide the header for all screens */
          headerShown: false,
        }}
      >
       {/* Home screen */}
        <Stack.Screen name="Home" component={Home} />
        {/* Class Info screen */}
        <Stack.Screen name="ClassInfo" component={ClassInfo} />
       {/* Appointment Confirmation screen */}
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
