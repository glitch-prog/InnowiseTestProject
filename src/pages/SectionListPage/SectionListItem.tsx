import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const SectionListItem = ({title}: any) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 300,
    backgroundColor: '#e2d',
    marginBottom: 10,
    borderRadius: 15,
  },
  itemTitle: {
    fontSize: 40,
    padding: 15,
  },
});
