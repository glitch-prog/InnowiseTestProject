import {
  ImagePickerResponse,
  launchCamera,
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

export class Camera {
  launchImage = (setPhoto: any) => {
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
  launchCamera = (setPhoto: any) => {
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
}
