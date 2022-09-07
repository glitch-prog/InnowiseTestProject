import {View, Text, SectionList, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SectionListItem} from './SectionListItem';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

export const SectionListPage = () => {
  return (
    <View style={styles.container}>
      <SectionList
        contentContainerStyle={styles.list}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <SectionListItem title={item} />}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    alignItems: 'center',
  },
});
