import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabBar from './components/MyTabBar';

const App = () => {
  return (
    <NavigationContainer>
      <MyTabBar />
    </NavigationContainer>
  );
};

export default App;
