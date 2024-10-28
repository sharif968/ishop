import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ProductDetailsScreen</Text>

    </View>
  )
}

export default ProductDetails

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
