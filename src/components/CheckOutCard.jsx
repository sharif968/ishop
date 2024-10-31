
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const CheckOutCard = ({ image, title, price, onPurchase }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button} onPress={onPurchase}>
          <Text style={styles.buttonText}>Purchase Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOutCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#DB312D',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#DB312D',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
