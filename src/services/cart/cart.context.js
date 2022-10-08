import React, { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }

    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);

    setSum(newSum);
  }, [cart]);

  const addToCart = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    }
    setCart([...cart, item]);
  };

  // Add this to make sure you can only order from 1 restaurant
  // else {
  //     setCart([...cart, item]);
  //   }

  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, clearCart, restaurant, cart, sum }}
    >
      {children}
    </CartContext.Provider>
  );
};
