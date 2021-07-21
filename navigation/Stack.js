import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../screens/Login/LoginContainer';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="로그인" component={LoginContainer} />
  </Stack.Navigator>
);
