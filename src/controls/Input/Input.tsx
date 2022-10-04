import {TextInput} from 'react-native';
import React from 'react';
import {styles} from './Input.styles';
import {IInput} from './Input.interface';

export const Input = React.memo(({placeholder, value, onChange}: IInput) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      style={styles.input}
    />
  );
});
