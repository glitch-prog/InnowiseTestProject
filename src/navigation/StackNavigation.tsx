import { View, Text } from 'react-native'
import React from 'react'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigation} from '../navigation/BottomTabNavigation';
import { DrawerNavigation } from '../navigation/DrawerNavigation';
import { AddToListPage } from '../pages/AddToListPage/AddToListPage';
import { SectionListPage } from '../pages/SectionListPage/SectionListPage';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Hme" component={SectionListPage} />
      </Stack.Navigator>
      )
}