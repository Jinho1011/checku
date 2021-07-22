import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import * as Keychain from 'react-native-keychain';

import LoginPresenter from './LoginPresenter';
import {login} from '../../api';

const alertLogin = res => {
  Alert.alert('로그인에 실패하였습니다.', res.ERRMSGINFO.ERRMSG, [
    {text: 'OK'},
  ]);
};

export default ({navigation}) => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const onSubmit = async () => {
    console.log('submitted');
    let res = JSON.parse(await login(id, pwd));
    console.log(res);

    if (res.JSESSIONID) {
      await Keychain.setGenericPassword(id, pwd);
      console.log('login success');
      navigation.navigate('tab');
    } else {
      alertLogin(res);
    }
  };

  return (
    <LoginPresenter
      setId={setId}
      setPwd={setPwd}
      onSubmit={onSubmit}></LoginPresenter>
  );
};
