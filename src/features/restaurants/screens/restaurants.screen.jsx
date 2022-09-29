import React, { useContext, useState } from "react";
import { TouchableOpacity as TouchableHighlight } from "react-native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card/restaurant-info-card.component";
import { Search } from "../components/search/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

import { colours } from "../../../infrastructure/theme/colours";

import { RestaurantList, Loader, LoadingContainer } from "./restaurants.style";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../components/animations/fade.animation";
import { LocationContext } from "../../../services/location/location.context";
import { Text } from "../../../components/typography/text.component";

export const RestaurantsScreen = ({ navigation }) => {
  // Choose which context I want to use in this component
  const {
    restaurants,
    isLoading,
    error: restaurantsError,
  } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!locationError || restaurantsError;

  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loader size={50} animating={true} color={colours.brand.primary} />
        </LoadingContainer>
      )}

      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled((prevToggle) => !prevToggle)}
      />

      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">Something went wrong retrieving the data</Text>
        </Spacer>
      )}

      {!hasError && (
        <RestaurantList
          data={restaurants} // This data comes straight from the context I set up earlier
          renderItem={({ item }) => (
            <TouchableHighlight
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <FadeInView>
                  <RestaurantInfoCard restaurant={item} />
                </FadeInView>
              </Spacer>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.name}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </SafeArea>
  );
};
