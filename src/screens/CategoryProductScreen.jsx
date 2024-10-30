import { View, Text } from 'react-native'
import  { useEffect } from 'react'
import React from 'react'
import { useCategoryProducts } from '../hooks/useCategoryProducts';

export default CategoryProductScreen  = ({navigation, route}) => {
    console.log('route', route)
const {category}=route.params
const {data: products, isLoading, isError} = useCategoryProducts({category});

    
    useEffect(() => {
        
        navigation.setOptions({
          headerTitle: category,
        });
      }, [navigation, category]);


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

