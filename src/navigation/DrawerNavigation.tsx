import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CarouselPage } from '../pages/CarouselPage/CarouselPage'

const Drawer = createDrawerNavigator()

export const DrawerNavigation = () => {
  return (
     <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name="About" component={CarouselPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}