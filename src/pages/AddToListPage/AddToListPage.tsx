import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  PermissionsAndroid,
  Platform,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const AddToListPage = () => {
  const [photo, setPhoto] = useState<any>();

  const handleChangePhoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      response => {
        console.log(response);
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

  return (
    <View>
      <Text>AddToList</Text>

      <TextInput />
      <TextInput />

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
            uri: photo.assets[0].uri,
          }}
        />
      ) : (
        <Text>Upload your photo</Text>
      )}
    </View>
  );
};
