import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import AppStack from './navigation/AppStack';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {CartProvider} from './context/useCartContext';

const queryClient = new QueryClient();

const App = () => {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </QueryClientProvider>
    </CartProvider>
  );
};

export default App;
