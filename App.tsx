import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {DrawerNavigation} from './src/navigation/DrawerNavigation';

export const App = () => {
  return (
    <Provider store={store}>
      <DrawerNavigation />
    </Provider>
  );
};
