import React, { useCallback, useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colours } from "../../../infrastructure/theme/colours";

import { AuthContext } from "../../../services/authentication/authentication.context";

const Icon = (props) => <List.Icon {...props} />;

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space.sm};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = useCallback(
    async (currentUser) => {
      const photoUri = await AsyncStorageLib.getItem(
        `${currentUser.uid}-profilePicture`
      );
      setPhoto(photoUri);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, photo]
  );

  // Update the profile picture anytime the navigation changes
  useFocusEffect(() => getProfilePicture(user));

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
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
        </TouchableOpacity>

        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View all your favourites"
          left={() => <Icon color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <SettingsItem
          title="Logout"
          description="Log out of the app"
          left={() => <Icon color="red" icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};
