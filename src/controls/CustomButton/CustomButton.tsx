import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICustomButton} from './CustomButton.interface';
import {styles} from './CustomButton.styles';

export const CustomButton = ({text, onPress}: ICustomButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};
