import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CarouselPage} from '../pages/CarouselPage/CarouselPage';
import {BottomTabNavigation} from './BottomTabNavigation';
import {DrawerNavigationItem} from './DrawerNavigationItem/DrawerNavigationItem';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={() => <DrawerNavigationItem />}
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Main" component={BottomTabNavigation} />
        <Drawer.Screen name="About" component={CarouselPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
