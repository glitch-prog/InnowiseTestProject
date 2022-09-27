import {View, Text, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const DrawerNavigationItem = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="About" onPress={() => navigation.navigate('About')} />
    </View>
  );
};
