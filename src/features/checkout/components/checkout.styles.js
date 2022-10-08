import { Avatar, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colours.brand.primary};
`;

export const NameInput = styled(TextInput)`
  margin: ${({ theme }) => theme.space.lg};
`;
