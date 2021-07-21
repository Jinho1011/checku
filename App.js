import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
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
