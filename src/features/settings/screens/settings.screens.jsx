import React, { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { colours } from "../../../infrastructure/theme/colours";

import { AuthContext } from "../../../services/authentication/authentication.context";

const Icon = (props) => <List.Icon {...props} />;

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space.lg};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${({ theme }) => theme.space.lg};
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon
          size={180}
          icon="human"
          backgroundColor={colours.brand.secondary}
        />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={() => <Icon color="black" icon="heart-outline" />}
          onPress={() => navigation.navigate("Favourites")}
        />

        <SettingsItem
          title="Logout"
          left={() => <Icon color="black" icon="door" />}
          onPress={() => onLogout()}
        />
      </List.Section>
    </SafeArea>
  );
};
