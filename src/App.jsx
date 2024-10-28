import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import AppStack from './navigation/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
