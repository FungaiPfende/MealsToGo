import React, { useContext, useEffect, useState } from "react";
import { Marker } from "react-native-maps";

import { LocationContext } from "../../../../services/location/location.context";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";

import { ExpoStatusBar } from "../../../../components/utility/expo-status-bar.component";
import { MapCallout } from "../../components/map-callout/map-callout.component";
import { Search } from "../../components/search/search.component";
import { Map } from "./map.styles";

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const result = northeastLat - southwestLat;
    setLatDelta(result);
  }, [location, viewport]);

  if (!location) {
    return <Map region={{ latitude: 0, longitude: 0 }} />;
  }

  return (
    <>
      <Search />

      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapCallout restaurant={restaurant} />
            </Marker>
          );
        })}
      </Map>

      <ExpoStatusBar theme="light" />
    </>
  );
};
