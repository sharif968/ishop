import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductDetails = ({ route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route?.params?.title}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
