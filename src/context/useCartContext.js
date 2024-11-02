import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
// Create a CartContext
const CartContext = createContext();

const key = 'cartItems';

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart data from AsyncStorage when the app loads
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem(key);
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Failed to load cart items from AsyncStorage', error);
      }
    };
    loadCartItems();
  }, []);


  // Function to add an item to the cart
  const addToCart = async (item) => {
    let updatedItems = [];
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevItems;
      }

       updatedItems = [...prevItems, item];

      return updatedItems;
    });
    await AsyncStorage.setItem(key,JSON.stringify(updatedItems));

  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Clear cart function
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
