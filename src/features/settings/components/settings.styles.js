import React from "react";
import styled from "styled-components/native";
import { List } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

export const Icon = (props) => <List.Icon {...props} />;

export const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space.sm};
`;

export const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${({ theme }) => theme.space.lg};
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const UpdateProfilePictureButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colours.bg.secondary};
  width: ${({ theme }) => theme.sizes.lg};
  height: ${({ theme }) => theme.sizes.lg};
  border-radius: 50px;
  position: absolute;
  top: 65%;
  right: 30%;
  justify-content: center;
  align-items: center;
`;

export const UpdateProfilePictureIcon = styled(Ionicons).attrs({
  name: "pencil",
  size: 16,
})`
  color: ${({ theme }) => theme.colours.brand.primary};
`;
