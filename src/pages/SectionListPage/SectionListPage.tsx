import {View, Text, SectionList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SectionListItem} from '../../controls/SectionListItem/SectionListItem';

import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {styles} from './SectionListPage.styles';
import {IListElement} from './SectionList.interface';

export const SectionListPage = () => {
  const [list, setList] = useState<IListElement[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const usersCollection = firestore()
      .collection('places')
      .onSnapshot(
        (response) => {
          setList(
            response.docs.map((el: FirebaseFirestoreTypes.DocumentData) =>
              el.data(),
            ),
          );
        },
        (err) => {
          setError(err);
        },
      );

    return () => usersCollection();
  }, []);

  const foodPlaces: string[] =
    list.length > 0
      ? list
          .filter((el: IListElement) => el.category === 'Food')
          .map((el: IListElement) => el.name)
      : [];
  const entertainmentPlaces: string[] =
    list.length > 0
      ? list
          .filter((el: IListElement) => el.category === 'Entertainment')
          .map((el: IListElement) => el.name)
      : [];
  const medicinePlaces: string[] =
    list.length > 0
      ? list
          .filter((el: IListElement) => el.category === 'Medicine')
          .map((el: IListElement) => el.name)
      : [];
  const otherPlaces: string[] =
    list.length > 0
      ? list
          .filter((el: IListElement) => el.category === '')
          .map((el: IListElement) => el.name)
      : [];

  const PLACES = [
    {title: 'Food', data: foodPlaces},
    {title: 'Entertainment', data: entertainmentPlaces},
    {title: 'Medicine', data: medicinePlaces},
    {title: 'Other', data: otherPlaces},
  ];

  return (
    <View style={styles.container}>
      <SectionList
        contentContainerStyle={styles.list}
        sections={PLACES}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <SectionListItem title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.title}>{title}</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
