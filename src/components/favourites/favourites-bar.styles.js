import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const FavouritesWrapper = styled(Card).attrs({
  elevation: 3,
})`
  padding: 10px;
  z-index: 999;
  border-radius: ${({ theme }) => theme.sizes.lg};
`;
