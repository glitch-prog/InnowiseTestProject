import Geolocation from '@react-native-community/geolocation';
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default function MapPage() {
  const [currentLongitude, setCurrentLongitude] = useState('37');
  const [currentLatitude, setCurrentLatitude] = useState('45');
  const [locationStatus, setLocationStatus] = useState('');
  const [coord, setCoordinate] = useState<any>({
    latitude: +currentLatitude,
    longitude: +currentLongitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
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
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('done');
      getOneTimeLocation();
    } else {
      console.log('Camera permission denied');
    }
  }, []);

  useEffect(() => {
    requestGeolocationPermission();
    setCoordinate({
      latitude: +currentLatitude,
      longitude: +currentLongitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, [currentLatitude, currentLongitude]);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
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
        <Marker
          draggable
          coordinate={coord}
          onDragEnd={e => setCoordinate(e.nativeEvent.coordinate)}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
function alert(message: string): void {
  throw new Error('Function not implemented.');
}
