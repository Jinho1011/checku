import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginContainer from '../screens/Login/LoginContainer';
import SettingContainer from '../screens/Setting/SettingContainer';
import Tab from './Tab';

const Stack = createStackNavigator();

export default ({initRoute}) => {
  if (initRoute == 'undefined') {
    return <View style={{flex: 1, backgroundColor: '#fff'}}></View>;
  } else {
    return (
      <Stack.Navigator
        initialRouteName={initRoute}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="login" component={LoginContainer} />
        <Stack.Screen name="tab" component={Tab} />
        <Stack.Screen name="setting" component={SettingContainer} />
      </Stack.Navigator>
    );
  }
};
