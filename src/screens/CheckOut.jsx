import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CheckOut = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CheckOutscreen</Text>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
