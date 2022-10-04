import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SectionListPage} from '../pages/SectionListPage/SectionListPage';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Hme" component={SectionListPage} />
    </Stack.Navigator>
  );
}
