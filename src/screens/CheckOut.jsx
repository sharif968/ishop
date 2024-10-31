import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckOutCard from "../components/CheckOutCard"
const CheckOut = ({route}) => {
  const {cartItems} = route.params;

  const handlePurchase = item => {
    console.log(`Purchasing: ${item.title}`);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold' , color: '#DB312D'}}>No items in cart</Text>
      </View>
    );
  }
  return (
    <View style={{backgroundColor: '#fff', height: '100%', width: '100%'}}>
      <Text style={styles.text}>CheckOut</Text>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <CheckOutCard
            image={item.image}
            title={item.title}
            price={item.price}
            onPurchase={handlePurchase}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  
  text: {
    color: 'red',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
