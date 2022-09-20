import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const CarouselPage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>CarouselPage</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
