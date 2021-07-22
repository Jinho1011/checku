import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../screens/Login/LoginContainer';
import SettingContainer from '../screens/Setting/SettingContainer';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="로그인"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="로그인" component={LoginContainer} />
    <Stack.Screen name="설정" component={SettingContainer} />
  </Stack.Navigator>
);
