import 'react-native-gesture-handler';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import Stack from './navigation/Stack';

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <NavigationContainer>
      <Stack></Stack>
    </NavigationContainer>
  );
};

export default App;
