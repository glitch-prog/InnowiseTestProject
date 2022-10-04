import {styles} from 'controls/SectionListItem/SectionListItem.styles';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ISectionListItem} from './SectionListItem.interface';

export const SectionListItem = ({title}: ISectionListItem) => {
  return (
    <TouchableOpacity style={styles.sectionBtn}>
      <Text style={styles.sectionBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};
