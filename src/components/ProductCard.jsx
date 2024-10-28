import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // for the cart icon
const { width } = Dimensions.get('window');

const ProductCard = ({ image, title, price, onAddToCart }) => {

  const navigation = useNavigation();


  return (
    <TouchableOpacity
      onPress={()=>navigation.navigate('ProductDetails',{
        image,
        title,
        price,
      })}
    style={styles.card}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.productPrice}>${price}</Text>
        <TouchableOpacity

        style={styles.cartButton} onPress={onAddToCart}>
          <Icon name="add-shopping-cart" size={24} color="#333" />
        </TouchableOpacity>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 32,
    height: width / 1.3,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  productImage: {
    width: width / 2 - 32,
    height: width / 2 - 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ProductCard;
