import {SetStateAction} from 'react';
import {
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

export const choosePhoto = (
  setPhoto: React.Dispatch<
    React.SetStateAction<ImagePickerResponse | undefined>
  >,
) => {
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
