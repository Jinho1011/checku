import React, {useState, useEffect} from 'react';
import LoginPresenter from './LoginPresenter';
import {_login} from '../../api';

export default () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [submit, setSubmit] = useState(false);

  useEffect(async () => {
    if (submit) {
      let res = await _login(id, pwd);
      console.log(res);
      console.log(res.text());
      console.log(res.text);
    }
  }, [submit]);

  return (
    <LoginPresenter
      setId={setId}
      setPwd={setPwd}
      setSubmit={setSubmit}></LoginPresenter>
  );
};
