import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';

interface ICarouselItem {
  title: string;
  description: string;
}

export const CarouselItem = ({item}: any) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {textAlign: 'center', marginBottom: 10},
  description: {textAlign: 'center', paddingHorizontal: 64},
});
