import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const Info = styled.View`
  padding-left: ${({ theme }) => theme.space.lg};
  padding-right: ${({ theme }) => theme.space.lg};
  padding-bottom: ${({ theme }) => theme.space.lg};
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colours.bg.primary};
  width: 95%;
  align-self: center;
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colours.bg.primary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space.md} 0;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
