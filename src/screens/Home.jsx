import {useNavigation} from '@react-navigation/native';
import MaterrialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  ActivityIndicator,

  FlatList,
  SafeAreaView,
  Alert,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductCard from '../components/ProductCard';
import {useProducts} from '../hooks/useProducts';
import {useCart} from '../context/useCartContext';

export default function HomeScreen() {
  const {data: products, isLoading, isError} = useProducts();
  const {cartItems, addToCart} = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    Alert.alert('Product added to cart!');
  };
  const navigation = useNavigation();
  const navigateToCheckout = () => {
    navigation.navigate('CheckOut', {cartItems});
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={'#DB312D'} />
      </View>
    );
  }

  if (isError) {
    return <Text>'An error has occurred: ' + error.message </Text>;
  }

  return (
    <SafeAreaView style={{flex: 1, padding: 12, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <FlatList
        ListHeaderComponent={
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 24}}>All Products</Text>
              <TouchableOpacity onPress={navigateToCheckout}>
                <MaterrialIcons name="shopping-cart" size={30} color="#DB312D" />
                {/* <Text style={{fontSize: 18}}>🛒 Cart</Text> */}
              </TouchableOpacity>
            </View>
          </>
        }
        data={products}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => (
          <ProductCard
           item={item}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
