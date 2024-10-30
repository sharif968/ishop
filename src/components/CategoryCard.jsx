import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const CategoryCard = ({ category }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('CategoryProductScreen', { category })} style={styles.card}>
      <View>
        <Text style={styles.cardText}>{category.toUpperCase()}</Text> 
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DB312D', 
    padding: 20,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
  },
  cardText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryCard;
