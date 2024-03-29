import React, { useCallback, useContext, useState } from "react";
import { Alert } from "react-native";
import { List, Avatar, Divider } from "react-native-paper";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { launchImageLibraryAsync } from "expo-image-picker";

import { colours } from "../../../infrastructure/theme/colours";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  AvatarContainer,
  SettingsItem,
  Icon,
  UpdateProfilePictureButton,
  UpdateProfilePictureIcon,
} from "../components/settings.styles";

import { AuthContext } from "../../../services/authentication/authentication.context";
import { ExpoStatusBar } from "../../../components/utility/expo-status-bar.component";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const getImageFromStorage = useCallback(
    async (currentUser) => {
      const photoUri = await AsyncStorageLib.getItem(
        `${currentUser.uid}-profilePicture`
      ).catch((err) => console.log("Error fetching image from storage:", err));

      setPhoto(photoUri);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, photo]
  );

  const selectImageFromGallery = async () => {
    const pickerResult = await launchImageLibraryAsync();
    await AsyncStorageLib.setItem(
      `${user.uid}-profilePicture`,
      pickerResult.uri
    ).catch((err) => console.log("Error selecting profile picture:", err));

    if (pickerResult.cancelled === true) {
      return;
    }
    getImageFromStorage(user);
  };

  const PROFILE_PICTURE_ALERT_BUTTONS = [
    {
      text: "Take a photo",
      onPress: () => navigation.navigate("Camera"),
      style: "default",
    },

    {
      text: "Choose a photo",
      onPress: () => selectImageFromGallery(),
      style: "default",
    },

    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
  ];

  const updateProfilePicture = () =>
    Alert.alert("Update your profile photo", "", PROFILE_PICTURE_ALERT_BUTTONS);

  const LOGOUT_ALERT_BUTTONS = [
    {
      text: "Yes",
      onPress: () => onLogout(),
      style: "destructive",
    },

    {
      text: "No",
      onPress: () => null,
      style: "default",
    },
  ];

  const handleLogout = () =>
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      LOGOUT_ALERT_BUTTONS
    );

  // Update the profile picture anytime the navigation changes
  useFocusEffect(() => getImageFromStorage(user));

  return (
    <SafeArea>
      <AvatarContainer>
        {!photo ? (
          <Avatar.Icon
            size={180}
            icon="human"
            backgroundColor={colours.brand.secondary}
          />
        ) : (
          <Avatar.Image
            size={180}
            source={{ uri: photo }}
            backgroundColor={colours.brand.secondary}
          />
        )}

        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>

        <UpdateProfilePictureButton onPress={() => updateProfilePicture()}>
          <UpdateProfilePictureIcon />
        </UpdateProfilePictureButton>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View all your favourites"
          left={() => <Icon color={colours.ui.primary} icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <Divider />

        <SettingsItem
          title="Past orders"
          description="View all your previous orders"
          left={() => <Icon color={colours.ui.primary} icon="history" />}
          onPress={() => null}
        />

        <Divider />

        <SettingsItem
          title="Logout"
          description="Log out of the app"
          left={() => <Icon color="red" icon="door" />}
          onPress={() => handleLogout()}
        />
      </List.Section>

      <ExpoStatusBar />
    </SafeArea>
  );
};
