import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../screens/Login/LoginContainer';
import SettingContainer from '../screens/Setting/SettingContainer';
import Tab from './Tab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="login"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="login" component={LoginContainer} />
    <Stack.Screen name="tab" component={Tab} />
    <Stack.Screen name="setting" component={SettingContainer} />
  </Stack.Navigator>
);
