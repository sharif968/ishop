import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import Category from './screens/Category';
import ProductDetails from './screens/ProductDetails';
import CheckOut from './screens/CheckOut';

const Tab = createBottomTabNavigator();

const App = () => {
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="ProductDetails" component={ProductDetails} />
      <Tab.Screen name="CheckOut" component={CheckOut} />
    </Tab.Navigator>
  </NavigationContainer>;
};

export default App;
