import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MapPage} from '../pages/MapPage/MapPage';
import {AddToListPage} from '../pages/AddToListPage/AddToListPage';
import StackNavigation from './StackNavigation';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="List"
        component={StackNavigation}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./list.png')}
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddToListPage}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./add.png')}
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapPage}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./map.png')}
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
