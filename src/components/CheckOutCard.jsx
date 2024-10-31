import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default CheckOutCard = ({image, title, price, onPurchase}) => {
  return (
    <View style={styles.card}>
      <Image resizeMode="contain" source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title.slice(0, 30)}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.button} onPress={onPurchase}>
          <Text style={styles.buttonText}>Purchase Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 10,
  
  },
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
   marginLeft: 20,
  
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
    width: 120,
    height: 40,

    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
