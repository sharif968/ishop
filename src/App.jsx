import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import AppStack from './navigation/AppStack';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
