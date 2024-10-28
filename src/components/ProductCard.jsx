import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // for the cart icon

const ProductCard = ({ image, title, price, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.productImage} />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>${price}</Text>
      </View>
      
      <TouchableOpacity style={styles.cartButton} onPress={onAddToCart}>
        <Icon name="add-shopping-cart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',

    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2, // for shadow on Android
    shadowColor: '#000', // for shadow on iOS
    shadowOffset: { width: 0, height: 2 }, // shadow properties for iOS
    shadowOpacity: 0.1, 
    shadowRadius: 4,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 15,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  cartButton: {
    backgroundColor: '#ff6347', // Tomato color for the button
    padding: 10,
    width: "50%",
    height: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default ProductCard;
