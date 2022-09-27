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
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';
import {Input} from '../../controls/Input/Input';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../utils/hooks/reduxHooks';
import {setType} from '../../store/reducers/coordsSlice';
import DropdownInput from '../../controls/Dropdown/Dropdown';
import firestore from '@react-native-firebase/firestore';
export const AddToListPage = () => {
  const navigation = useNavigation();
  const [photo, setPhoto] = useState<any>();
  const dispatch = useAppDispatch();
  const {control, handleSubmit} = useForm();
  const [category, setCategory] = useState<string>('');

  const bankList = [
    {value: 'Food'},
    {value: 'Medicine'},
    {value: 'Entertaiment'},
    {value: 'Hotel'},
    {value: 'Other'},
  ];
  const [filterBankList, setFilterBankList] = useState<any>([]);
  const [bankName, setBankName] = useState('');

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
      coordinates: {latitude: 0, longatude: 0},
      category: category,
    };

    firestore()
      .collection('places')
      .add(place)
      .then(() => {
        console.log('place added!');
      });
    console.log(JSON.stringify(place));
  };

  const handleOnMark = () => {
    navigation.navigate('Map');
    dispatch(setType());
  };

  const onBankSelected = (value: any) => {
    setBankName(value);
    setFilterBankList([]);
  };
  const filterBanks = (value: any) => {
    let filterData =
      bankList && bankList?.length > 0
        ? bankList?.filter(data =>
            data?.value.toLowerCase()?.includes(value?.toLowerCase()),
          )
        : [];
    setFilterBankList([...filterData]);
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

      <View>
        <Text>Category</Text>
        <View style={styles.categoryBlock}>
          <TouchableOpacity style={styles.categoryBtn}>
            <Text>Medicine</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}>
            <Text>Entertainment</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryBtn}>
            <Text>Food</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={handleOnMark}>
        <Text>Mark</Text>
      </TouchableOpacity>

      {/* <View>
         <Text>Category</Text> 

        <TextInput
          value={bankName}
          placeholder={strings.selectBankName}
          style={styles.textInput}
          onChangeText={filterBanks}
        />
        <FlatList
          data={filterBankList}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => onBankSelected(item?.value)}>
              <View>
                <Text>{item?.value || ''}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.value}
        />
      </View> */}

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
  categoryBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  categoryBtn: {
    width: 120,
    height: 50,
    backgroundColor: 'purple',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choosedCategoryBtn: {
    width: 120,
    height: 50,
    backgroundColor: 'green',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
