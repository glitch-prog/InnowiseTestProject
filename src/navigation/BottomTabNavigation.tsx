import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SectionListPage} from '../pages/SectionListPage/SectionListPage';
import MapPage from '../pages/MapPage/MapPage';
import {AddToListPage} from '../pages/AddToListPage/AddToListPage';
import { DrawerNavigation } from './DrawerNavigation';
import StackNavigation from './StackNavigation';
// import {ReactComponent as ClipboardSVG} from 'src/assets/svg/clipboard.svg';
// import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='List' component = {StackNavigation}/>
      <Tab.Screen name="+" component={AddToListPage} />
      <Tab.Screen name="Map" component={MapPage} />
    </Tab.Navigator>
  );
};
