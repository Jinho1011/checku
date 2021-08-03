import React, {useState} from 'react';
import {Alert} from 'react-native';
import * as Keychain from 'react-native-keychain';

import LoginPresenter from './LoginPresenter';
import {login, onload} from '../../api';
import {storeData} from '../../storage';

const alertLogin = res => {
  Alert.alert('로그인에 실패하였습니다.', res.ERRMSGINFO.ERRCODE, [
    {text: 'OK'},
  ]);
};

export default ({navigation}) => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const onSubmit = async () => {
    let res = await login(id, pwd);
    try {
      res = JSON.parse(res);
    } catch (e) {
      console.error(e);
    }

    if (res.JSESSIONID) {
      await Keychain.setGenericPassword(id, pwd);
      let stdNo = JSON.parse(await onload()).dsPriv[0].STD_NO;
      await storeData('@stdNo', stdNo);
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
