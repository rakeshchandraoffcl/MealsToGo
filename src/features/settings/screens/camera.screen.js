import { CameraWrapper, ExpoCamera } from '../components/components.style';
import React, { useContext, useEffect, useRef, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Button } from 'react-native-paper';
import { Camera } from 'expo-camera';
import { Text } from '../../../components/typography/typography.component';
import { TouchableOpacity } from 'react-native';

export const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <CameraWrapper />;
  }
  if (hasPermission === false) {
    return (
      <CameraWrapper>
        <Text>No access to camera</Text>
      </CameraWrapper>
    );
  }

  const snap = async () => {
    if (cameraRef.current) {
      try {
        let photo = await cameraRef.current.takePictureAsync();
        await AsyncStorage.setItem(`photo-${user.uid}`, JSON.stringify(photo.uri));
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <CameraWrapper>
      <ExpoCamera
        type={type}
        onCameraReady={() => console.log('ready')}
        ref={(ref) => {
          cameraRef.current = ref;
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text> Flip </Text>
        </TouchableOpacity>
      </ExpoCamera>
      <Button onPress={snap}>Snap</Button>
    </CameraWrapper>
  );
};
