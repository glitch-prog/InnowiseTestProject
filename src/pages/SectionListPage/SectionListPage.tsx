import {View, Text, SectionList, ScrollView, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SectionListItem} from './SectionListItem';

import firestore from '@react-native-firebase/firestore';

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
  const [list, setList] = useState<any>();
  console.log('list screen');

  useEffect(() => {
    const usersCollection = firestore()
      .collection('places')
      .onSnapshot(
        response => {
          console.log('response');
          setList(response.docs[0].data());
        },
        error => console.log(error),
      );

    return () => usersCollection();
  }, []);
  return (
    <View style={styles.container}>
      <SectionList
        contentContainerStyle={styles.list}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <SectionListItem title={item} />}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        showsVerticalScrollIndicator={false}
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
