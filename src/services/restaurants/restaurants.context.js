import React, { useState, createContext, useEffect, useMemo } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

// Create global context ti be used throughout the app.
export const RestaurantsContext = createContext();

// Creates a Provider for that context to be used throughout.
// The value property will be the data that is shared across components
export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [1, 2, 3] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
