import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home/index';
import Season from './screens/Season/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ Home } />
        <Stack.Screen name="Season" component={ Season } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
