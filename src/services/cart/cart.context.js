import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);

  const addToCart = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    }

    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider value={{ addToCart, clearCart, restaurant, cart }}>
      {children}
    </CartContext.Provider>
  );
};
