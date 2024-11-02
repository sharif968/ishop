import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';
const CartContext = createContext();



// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart data from AsyncStorage when the app loads
  useEffect(() => {
    const loadCartItems = async () => {
      try {
        const storedCartItems = await AsyncStorage.getItem('cartItems');
        if (storedCartItems) {
          setCartItems(JSON.parse(storedCartItems));
        }
      } catch (error) {
        console.error('Failed to load cart items from AsyncStorage', error);
      }
    };
    loadCartItems();
  }, []);
  
   // Save cart data to AsyncStorage whenever it changes
   useEffect(() => {
    const saveCartItems = async () => {
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
      } catch (error) {
        console.error('Failed to save cart items to AsyncStorage', error);
      }
    };
    saveCartItems();
  }, [cartItems]);

  
  // Function to add an item to the cart
  const addToCart = item => {
    setCartItems(prevItems => {
      const itemExists = prevItems.some(cartItem => cartItem.id === item.id);

      if (itemExists) {
        Alert.alert('Product already in the cart!');
        return prevItems;
      }

      const updatedItems = [...prevItems, item];
      Alert.alert('Product added to the cart!');
      return updatedItems;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = itemId => {
    Alert.alert("Do you want to remove the item from the cart?")
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Clear cart function
  const clearCart = () => {
    Alert.alert("Do you want to clear the cart?")
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
