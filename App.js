import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './navigation/Stack';

const App = () => {
  return (
    <NavigationContainer>
      <Stack></Stack>
    </NavigationContainer>
  );
};

export default App;
