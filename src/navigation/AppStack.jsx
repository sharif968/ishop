import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ProductDetails from '../screens/ProductDetails';
import MyTabBar from './MyTabBar';

const Stack = createNativeStackNavigator();


export default function AppStack() {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
    >
    <Stack.Screen name="App" component={MyTabBar} />
    <Stack.Screen  options={{headerShown: true}} name="ProductDetails" component={ProductDetails} />
  </Stack.Navigator>
  );
}
