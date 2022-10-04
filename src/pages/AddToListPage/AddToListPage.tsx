import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {FieldValues, useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {setType} from '../../store/reducers/coordsSlice';

import firestore from '@react-native-firebase/firestore';

import {styles} from './AddToList.styles';
import {CustomButton} from 'controls/CustomButton/CustomButton';
import {CategoryButton} from 'controls/CategoryButton/CategoryButton';
import {ReactHookInput} from 'services/reactHookInput/ReactHookInput';
import {CustomSwitch} from 'controls/CustimSwitch/CustomSwitch';

export const AddToListPage = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState<ImagePickerResponse>();
  const dispatch = useAppDispatch();
  const {control, handleSubmit} = useForm();
  const [category, setCategory] = useState<string>('');
  const coords = useAppSelector((state) => state.coords.value);

  const onCameraPress = () => {
    launchCamera(
      {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      (response) => {
        setPhoto(response);
      },
    );
  };

  const handleOnSubmit = (data: FieldValues) => {
    if (photo?.assets) {
      const place = {
        name: data.name,
        description: data.description,
        image: `${photo.assets[0].base64}`,
        timestamp: new Date().toISOString(),
        coordinates: {latitude: coords.latitude, longitude: coords.longitude},
        category: `${category}`,
      };

      console.log(place);
      firestore()
        .collection('places')
        .add(place)
        .then(() => console.log('added'));
    }
  };

  const handleOnMark = () => {
    navigation.navigate('Map');
    dispatch(setType());
  };

  const handleOnCategoryPress = (str: string) => {
    setCategory(str);
    console.log(str);
  };

  const choosePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      (response) => {
        setPhoto(response);
      },
    );
  };
  return (
    <View style={styles.container}>
      <Text>AddToList</Text>

      <ReactHookInput name={'name'} control={control} placeholder={'Name'} />
      <ReactHookInput
        name={'description'}
        control={control}
        placeholder={'Description'}
      />

      <View>
        <Text>Category</Text>
        <View style={styles.categoryBlock}>
          <CategoryButton
            text={'Medicine'}
            category={category}
            onPress={() => handleOnCategoryPress('Medicine')}
          />

          <CategoryButton
            text={'Entertaiment'}
            category={category}
            onPress={() => handleOnCategoryPress('Entertaiment')}
          />

          <CategoryButton
            text={'Food'}
            category={category}
            onPress={() => handleOnCategoryPress('Food')}
          />
        </View>
      </View>

      <CustomSwitch />

      <CustomButton text={'Mark'} onPress={handleOnMark} />
      <CustomButton text={'Photo'} onPress={onCameraPress} />
      <CustomButton text={'Add'} onPress={choosePhoto} />

      {photo?.assets ? (
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: photo.assets[0].uri,
          }}
        />
      ) : (
        <Text>Upload your photo</Text>
      )}

      <TouchableOpacity onPress={handleSubmit(handleOnSubmit)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
