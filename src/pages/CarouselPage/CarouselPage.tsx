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
        showsHorizontalScrollIndicator
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
