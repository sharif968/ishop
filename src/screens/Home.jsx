import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductCard from '../components/ProductCard';

export default function HomeScreen() {
  const products = [
    {
      id: '1',
      title: 'Product 1',
      price: '29.99',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '2',
      title: 'Product 2',
      price: '49.99',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '3',
      title: 'Product 3',
      price: '19.99',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '4',
      title: 'Product 4',
      price: '59.99',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '5',
      title: 'Product 5',
      price: '39.99',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '6',
      title: 'Product 6',
      price: '79.99',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '7',
      title: 'Product 7',
      price: '69.99',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '8',
      title: 'Product 8',
      price: '89.99',
      image: 'https://via.placeholder.com/80',
    },
  ];

  const handleAddToCart = () => {
    Alert.alert('Product added to cart!');
  };
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, padding: 12 }}>
      <FlatList
        ListHeaderComponent={<>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={{ fontSize: 24 }}>All Products</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}>
              <Text style={{ fontSize: 18 }}>🛒 Cart</Text>
            </TouchableOpacity>
          </View></>}
        data={products}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <ProductCard
            image={item.image}
            title={item.title}
            price={item.price}
            onAddToCart={handleAddToCart}
          />
        )}

        keyExtractor={item => item.id}
        numColumns={2}

      />
    </SafeAreaView>

  );
}
