import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import CartCard from '../components/CartCard';
import { useCart } from '../context/useCartContext';
import { useNavigation } from '@react-navigation/native';


const CheckOut = () => {
  const {removeFromCart, clearCart , cartItems} = useCart();

 const navigation = useNavigation();

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const handlePurchase = item => {
    console.log(`Purchasing: ${item.title}`);
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: '#fff'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#DB312D'}}>
          No items in cart
        </Text>
      </View>
    );
  }
  return (
    <View style={{backgroundColor: '#fff', height: '100%', width: '100%'}}>
      <Text style={styles.text}>Cart</Text>
      <TouchableOpacity onPress={() => navigation.navigate('CheckOut' , {cartItems})}>
        <Text
          style={{
            backgroundColor: '#DB312D',
            padding: 10,
            borderRadius: 10,
            marginHorizontal: 40,
            marginBottom: 20,
          }}>
          CheckOut
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={clearCart}
        style={{backgroundColor: '#DB312D', padding: 10, borderRadius: 10 , marginHorizontal: 40, marginBottom: 20}}>
        <Text style={{color: '#fff', textAlign: 'center'}}> Remove All </Text>
      </TouchableOpacity>
      <FlatList
        data={cartItems}
        renderItem={({item}) => (
          <CartCard
            image={item.image}
            title={item.title}
            price={item.price}
            onPurchase={handlePurchase}
            onRemove={() => handleRemove(item.id)}
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
    marginBottom: 20,
  },
});
