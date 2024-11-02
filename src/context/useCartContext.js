import React, {createContext, useState, useEffect, useContext, Alert} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        Alert.alert('Product already in cart!');
        return prevItems;
      }

      const updatedItems = [...prevItems, item];
      return updatedItems;
    });
    await AsyncStorage.setItem(key,JSON.stringify(updatedItems));

  };

  // Function to remove an item from the cart
  const removeFromCart = itemId => {
    Alert.alert("Do you want to remove this item?")
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
