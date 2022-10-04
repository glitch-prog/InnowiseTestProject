import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './CategoryButton.styles';
import {ICategoryButton} from './CategoryButton.interface';

export const CategoryButton = ({text, category, onPress}: ICategoryButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        text !== category ? styles.categoryBtn : styles.choosedCategoryBtn
      }>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};
