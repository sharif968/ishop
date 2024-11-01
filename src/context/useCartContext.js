import React, {createContext, useState, useEffect, useContext} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
// Create a CartContext
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
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        Alert.alert('This item is already in your cart!');
        return prevItems;
      }

      const updatedItems = [...prevItems, item];
      Alert.alert('Product added to cart!');
      return updatedItems;
    });
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
