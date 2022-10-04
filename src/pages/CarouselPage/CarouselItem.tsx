import {View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {ICarouselItem} from './Carousel.interface';
import {styles} from './Carousel.styles';

export const CarouselItem = ({title, description}: ICarouselItem) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <View style={styles.descriptionBlock}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
