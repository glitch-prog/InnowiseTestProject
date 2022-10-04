import Geolocation from '@react-native-community/geolocation';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import {IListElement} from 'pages/SectionListPage/SectionList.interface';
import React, {useCallback, useEffect, useState} from 'react';
import {View, PermissionsAndroid, Button} from 'react-native';
import MapView, {LatLng, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {setCoordsToStore, setType} from '../../store/reducers/coordsSlice';
import {useAppDispatch, useAppSelector} from '../../utils/hooks/reduxHooks';
import {ICoord} from './MapPage.interface';
import {styles} from './MapPage.styles';

export const MapPage = () => {
  const type = useAppSelector((state) => state.coords.type);
  const [list, setList] = useState<any>([]);
  const [currentLongitude, setCurrentLongitude] = useState<string>('37');
  const [currentLatitude, setCurrentLatitude] = useState<string>('45');
  const [locationStatus, setLocationStatus] = useState<string>('');
  const places = useAppSelector((state) => state.list.value);
  console.log(places);

  const [coord, setCoordinate] = useState<ICoord | LatLng>({
    latitude: +currentLatitude,
    longitude: +currentLongitude,
  });

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      (position) => {
        setLocationStatus('You are Here');
        const currentMobileLongitude = JSON.stringify(
          position.coords.longitude,
        );
        const currentMobileLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentMobileLongitude);
        setCurrentLatitude(currentMobileLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  const requestGeolocationPermission = useCallback(async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation persmission',
        message:
          'RN-CIS App needs access to your geolocation ' +
          'so you can check places you need in.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getOneTimeLocation();
    }
  }, []);

  const handleOnConfirm = () => {
    dispatch(setCoordsToStore(coord));
    dispatch(setType());
    navigation.navigate('+');
  };

  useEffect(() => {
    requestGeolocationPermission();
    setCoordinate({
      latitude: +currentLatitude,
      longitude: +currentLongitude,
    });
    const usersCollection = firestore()
      .collection('places')
      .onSnapshot(
        (response) => {
          setList(
            response.docs.map((el: FirebaseFirestoreTypes.DocumentData) =>
              el.data(),
            ),
          );
        },
        (err) => {
          // setError(err);
          console.log(err);
        },
      );

    return () => usersCollection();
  }, [currentLatitude, currentLongitude, requestGeolocationPermission]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: +currentLatitude,
          longitude: +currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        region={{
          latitude: +currentLatitude,
          longitude: +currentLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}>
        {type ? (
          <Marker
            draggable
            coordinate={coord}
            key={coord.latitude + coord.longitude}
            onDragEnd={(e) => setCoordinate(e.nativeEvent.coordinate)}
          />
        ) : null}

        {list.map((el: any) =>
          el.coordinates != null ? (
            <Marker key={el.id} coordinate={el.coordinates} />
          ) : null,
        )}
      </MapView>
      {type ? <Button title={'Confirm'} onPress={handleOnConfirm} /> : null}
    </View>
  );
};
