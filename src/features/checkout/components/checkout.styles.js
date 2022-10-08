import {
  ActivityIndicator,
  Avatar,
  Button,
  Colors,
  TextInput,
} from "react-native-paper";
import styled from "styled-components/native";

import { colours } from "../../../infrastructure/theme/colours";

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

export const PayButton = styled(Button).attrs({
  color: colours.brand.primary,
  mode: "contained",
  icon: "cash-usd",
})`
  width: 80%;
  align-self: center;
  padding: ${({ theme }) => theme.space.md};
`;

export const ClearButton = styled(Button).attrs({
  color: colours.ui.error,
  mode: "contained",
  icon: "cart-off",
})`
  width: 80%;
  align-self: center;
  padding: ${({ theme }) => theme.space.md};
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 128,
  animating: true,
  color: Colors.blue300,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;
