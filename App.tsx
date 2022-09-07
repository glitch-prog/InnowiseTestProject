import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigation} from './src/navigation/BottomTabNavigation';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="H" component={DrawerNavigation} />
        <Stack.Screen name="Home" component={BottomTabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
