import {Image, Pressable, SafeAreaView, Text} from 'react-native';
import Modal from 'react-native-modal/dist/modal';

export function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}: any) {
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      // style={styles.modal}
    >
      <SafeAreaView>
        <Pressable onPress={onImageLibraryPress}>
          {/* <Image source={images.image} /> */}
          <Text>Library</Text>
        </Pressable>
        <Pressable onPress={onCameraPress}>
          {/* <Image source={images.camera} /> */}
          <Text>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}
