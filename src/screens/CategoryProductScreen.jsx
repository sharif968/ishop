import { View, Text,ActivityIndicator, FlatList, SafeAreaView, StatusBar ,Alert} from 'react-native'
import ProductCard from '../components/ProductCard';
import  { useEffect } from 'react'
import React from 'react'
import { useCategoryProducts } from '../hooks/useCategoryProducts';

export default CategoryProductScreen  = ({navigation, route}) => {
const {category}=route.params
const {data: products, isLoading, isError} = useCategoryProducts({categoryTitle:category});


    const handleAddToCart = () => {
        Alert.alert('Product added to cart!');
      };

    const headerTitle = category.toUpperCase()
    useEffect(() => {
        
        navigation.setOptions({
          headerTitle: headerTitle,
        });
      }, [navigation, headerTitle]);


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
            
          </>
        }
        data={products}
        contentContainerStyle={{paddingBottom: 20}}
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

