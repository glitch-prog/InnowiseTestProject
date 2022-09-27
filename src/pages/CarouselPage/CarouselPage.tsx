import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CarouselItem} from './CarouselItem';
import Paginator from './Paginator';

const slides = [
  {
    id: '1',
    title: 'hello',
    description: 'This app is created for people from CIS region',
  },
  {
    id: '2',
    title: 'Track',
    description: 'Here you can track some places where you can speak Russian',
  },
  {
    id: '3',
    title: 'Track',
    description: 'Here you can track some places where you can speak Russian',
  },
  {
    id: '4',
    title: 'Track',
    description: 'Here you can track some places where you can speak Russian',
  },
];

export const CarouselPage = () => {
  const navigation = useNavigation();
  const [currentId, setCurrentId] = useState<number>(0);
  const scrollCoord = useRef(new Animated.Value(0)).current;

  const viewableItemsChange = useRef(({viewableItems}: any) =>
    setCurrentId(viewableItems[0].index),
  ).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  return (
    <View style={[styles.container]}>
      <FlatList
        data={slides}
        renderItem={({item}) => <CarouselItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollCoord}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChange}
        viewabilityConfig={viewConfig}
        // ref={slidesRef}
      />
      <Paginator data={slides} scrollX={scrollCoord} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
