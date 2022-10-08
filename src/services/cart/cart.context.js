import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

import { AuthContext } from "../authentication/authentication.context";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    if (user && user.uid) {
      saveCart(restaurant, cart, user.uid);
    }
  }, [cart, restaurant, user]);

  useEffect(() => {
    if (user && user.uid) {
      loadCart(user.uid);
    }
  }, [user]);

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

  const saveCart = async (rst, crt, uid) => {
    try {
      const jsonValue = JSON.stringify({ restaurant: rst, cart: crt });
      await AsyncStorageLib.setItem(`@cart-${uid}`, jsonValue);
    } catch (error) {
      console.log("Error saving cart:", error);
    }
  };

  const loadCart = async (uid) => {
    try {
      const value = await AsyncStorageLib.getItem(`@cart-${uid}`);
      if (value !== null) {
        const { restaurant: rst, cart: crt } = JSON.parse(value);
        setCart(crt);
        setRestaurant(rst);
      }
    } catch (error) {}
  };

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
