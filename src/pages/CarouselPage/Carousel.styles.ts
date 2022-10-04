import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  descriptionBlock: {flex: 0.3},

  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#493d8a',
    marginHorizontal: 8,
  },

  title: {textAlign: 'center', marginBottom: 10},

  description: {textAlign: 'center', paddingHorizontal: 64},

  paginatorContainer: {
    flexDirection: 'row',
    height: 64,
  },
});
