import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigation} from './src/navigation/BottomTabNavigation';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const Drawer = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name="H" component={DrawerNavigation} />
    //     <Drawer.Screen name="Home" component={BottomTabNavigation} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default App;
