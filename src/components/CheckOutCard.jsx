import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default CheckOutCard = ({image, title, price, onPurchase, onRemove}) => {
  return (
    <View style={styles.card}>
      <Image resizeMode="contain" source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title.slice(0, 20) + '...'}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={onPurchase}>
            <Text style={styles.buttonText}>Purchase Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1,
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#DB312D',
    borderRadius: 5,
    padding: 10,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  removeButton: {
    backgroundColor: '#555',
    borderRadius: 5,
    padding: 10,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
