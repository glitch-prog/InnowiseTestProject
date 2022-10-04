import {View, Button, FlatList, Animated} from 'react-native';
import React, {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CarouselItem} from './CarouselItem';
import {Paginator} from './Paginator';
import {styles} from './Carousel.styles';
import {SLIDES} from 'constants/constants';

export const CarouselPage = () => {
  const navigation = useNavigation();
  const scrollCoord = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const navigateBack = () => navigation.goBack();

  return (
    <View style={[styles.container]}>
      <FlatList
        data={SLIDES}
        renderItem={({item}) => (
          <CarouselItem title={item.title} description={item.description} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollCoord}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        viewabilityConfig={viewConfig}
      />
      <Paginator data={SLIDES} scrollX={scrollCoord} />
      <Button title="Go back" onPress={navigateBack} />
    </View>
  );
};
