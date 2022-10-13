import {
  View
} from 'react-native';
import React, {useState} from 'react';
import {Input} from 'controls/Input/Input';

export const CoordinatesForm = () => {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');

  const handleOnChangeSetLatitude = (text: string) => setLatitude(text);
  const handleOnChangeSetLongitude = (text: string) => setLongitude(text);

  return (
    <View>
      <Input
        placeholder="Latitude"
        value={latitude}
        onChange={(text: string) => handleOnChangeSetLatitude(text)}
      />
      <Input
        placeholder="Longitude"
        value={longitude}
        onChange={(text: string) => handleOnChangeSetLongitude(text)}
      />
    </View>
  );
};
