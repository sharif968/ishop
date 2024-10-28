import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
