import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import { Text, Image } from "react-native";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Spacer } from "../../../components/spacer/spacer.component";

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading}
  font-size: ${({ theme }) => theme.fontSizes.title}
  color: ${({ theme }) => theme.colours.text.primary};
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.space.lg};
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colours.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space.lg};
  background-color: ${({ theme }) => theme.colours.bg.primary};
`;

const Rating = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space.md} 0;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  // Create an array from the length of rating to use it to
  // loop over when rendering
  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />

      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>

          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red", fontSize: 10 }}>
                CLOSED TEMPORARILY
              </Text>
            )}

            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
