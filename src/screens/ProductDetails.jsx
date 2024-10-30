import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductDetails = ({ route , navigation }) => {
  const { image, title, price } = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, [navigation, title]);
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title.slice(0, 20)}</Text>
      <Text style={styles.text}>{price}</Text>
      <Text style={styles.text}>{image}</Text>
    </View>
  );
};

export default ProductDetails;

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
