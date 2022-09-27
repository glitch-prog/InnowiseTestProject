import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useController} from 'react-hook-form';

export const Input = ({name, control, placeholder}: any) => {
  const {field} = useController({control, defaultValue: '', name});
  return (
    <TextInput
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    width: '80%',
    height: 40,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 4,
  },
});
