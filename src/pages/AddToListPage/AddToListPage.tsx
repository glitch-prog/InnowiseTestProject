import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Platform,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';
import {Input} from '../../controls/Input/Input';

export const AddToListPage = () => {
  const [photo, setPhoto] = useState<any>();

  const {control, handleSubmit} = useForm();

  const handleChangePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        // console.log(response);
        setPhoto(response);
      },
    );
  };

  const onCameraPress = () => {
    launchCamera(
      {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log(response);
      },
    );
  };

  const handleOnSubmit = (data: any) => {
    const place = {
      name: data.name,
      description: data.description,
      image: photo.assets[0].base64,
      timestamp: new Date().toISOString(),
    };

    console.log(JSON.stringify(place));
  };

  return (
    <View style={styles.container}>
      <Text>AddToList</Text>

      <Input name={'name'} control={control} placeholder={'Name'} />
      <Input
        name={'description'}
        control={control}
        placeholder={'Description'}
      />

      <TouchableOpacity onPress={() => onCameraPress}>
        <Text>Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleChangePhoto()}>
        <Text>Add</Text>
      </TouchableOpacity>

      {photo ? (
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: photo?.assets[0].uri,
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

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
