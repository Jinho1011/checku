import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import * as Keychain from 'react-native-keychain';
import {NavigationContainer} from '@react-navigation/native';

import {login} from './api';
import Stack from './navigation/Stack';

const App = () => {
  const [initRoute, setInitRoute] = useState('undefined');

  useEffect(async () => {
    const credentials = await Keychain.getGenericPassword();

    if (credentials) {
      let res = await login(credentials.username, credentials.password);
      setInitRoute('tab');
    } else {
      setInitRoute('login');
    }

    // await Keychain.resetGenericPassword();
  }, []);

  return (
    <NavigationContainer>
      <Stack initRoute={initRoute}></Stack>
    </NavigationContainer>
  );
};

export default App;
