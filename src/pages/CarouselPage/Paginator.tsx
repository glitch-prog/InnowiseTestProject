import {View, useWindowDimensions, Animated} from 'react-native';
import React from 'react';
import {IPaginator} from './Carousel.interface';
import {styles} from './Carousel.styles';

const Paginator = ({data, scrollX}: IPaginator) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.paginatorContainer}>
      {data.map((_, id: number) => {
        const inputRange = [(id - 1) * width, id * width, (id + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={id.toString()}
          />
        );
      })}
    </View>
  );
};

export {Paginator};
