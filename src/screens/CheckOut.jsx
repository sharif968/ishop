import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CheckoutCard} from '../components/CheckOutCard';
const CheckOut = ({route}) => {
  const {cartItems} = route.params;

  const handlePurchase = item => {
    console.log(`Purchasing: ${item.title}`);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No items in cart</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <CheckoutCard
            image={item.image}
            title={item.title}
            price={item.price}
            onPurchase={ handlePurchase}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
