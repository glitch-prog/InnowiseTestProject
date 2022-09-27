import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SelectList from 'react-native-dropdown-select-list';
import {Dropdown} from 'react-native-material-dropdown';

const DropdownInput = () => {
  const [selected, setSelected] = React.useState('');

  let data = [
    {
      value: 'Banana',
    },
    {
      value: 'Mango',
    },
    {
      value: 'Pear',
    },
  ];
  return (
    <Dropdown
      data={[
        {
          value: 'Banana',
        },
        {
          value: 'Mango',
        },
        {
          value: 'Pear',
        },
      ]}
    />
  );
};

export default DropdownInput;

const styles = StyleSheet.create({});
