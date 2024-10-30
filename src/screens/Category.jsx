import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import { useCategories } from '../hooks/useCatagories';

export default Category = () => {
  
  

  const {data: categories, isLoading, isError} = useCategories();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#DB312D" />
      </View>
    );
  }

  if (isError) {
    return <Text>An error occurred while fetching categories.</Text>;
  }


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{flex: 1  , marginVertical: 20}}>
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <CategoryCard
            category={item}
            
          />
        )}
        contentContainerStyle={{padding: 10 }}
      />
      </View>
    </SafeAreaView>
  );
};
