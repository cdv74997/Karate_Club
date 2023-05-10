import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home.js';
import ClassInfo from './screens/ClassInfo.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ClassInfo" component={ClassInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
