import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home.js';
import ClassInfo from './screens/ClassInfo.js';
import Confirmation from './screens/Confirmation.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false,
       }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ClassInfo" component={ClassInfo} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
