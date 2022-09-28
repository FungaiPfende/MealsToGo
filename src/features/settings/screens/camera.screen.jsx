import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera } from "expo-camera";
import { View } from "react-native";

import { Text } from "../../../components/typography/text.component";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/authentication/authentication.context";
import {
  CameraButton,
  CameraDot,
  ProfileCamera,
} from "../components/camera.styles";

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthContext);

  // Request for the permissions to access camera
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  } else if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  //Take a picture, store it to the devices storage according to the user and go back to the previous screen
  const snapPicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorageLib.setItem(`${user.uid}-profilePicture`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    >
      <CameraButton onPress={() => snapPicture()}>
        <CameraDot />
      </CameraButton>
    </ProfileCamera>
  );
};
