import { useNavigation } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import instance from '../api/axios';
import ProductCard from '../components/ProductCard';

const fetchData = async () => {
  const response = await instance.get('/products');
  return response.data;
};
export default function HomeScreen() {

  const handleAddToCart = () => {
    Alert.alert('Product added to cart!');
  };
  const navigation = useNavigation();

  const {isLoading, error, data} = useQuery({
    queryKey: ['products'],
    queryFn: () => fetchData(),
    refetchOnWindowFocus: false,
    retry: false,
  });

  console.log(data);

  if (isLoading) {return <Text >Loading...</Text>;}

  if (error) {return <Text>'An error has occurred: ' + error.message </Text>;}

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
              <TouchableOpacity onPress={() => navigation.navigate('CheckOut')}>
                <Text style={{fontSize: 18}}>🛒 Cart</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        data={data}
        contentContainerStyle={{paddingBottom: 100}}
        renderItem={({item}) => (
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
