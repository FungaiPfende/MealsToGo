import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "./search/search.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  return (
    <>
      <Search />
      <Map />
    </>
  );
};
