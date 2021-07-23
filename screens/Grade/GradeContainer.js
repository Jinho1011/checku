import React, {useEffect} from 'react';
import * as Keychain from 'react-native-keychain';

import {getData} from '../../storage';
import GradePresenter from './GradePresenter';

export default () => {
  useEffect(async () => {
    let stdNo = await getData('@stdNo');
    console.log('🚀 ~ file: GradeContainer.js ~ line 8 ~ stdNo', stdNo);
  });

  return <GradePresenter></GradePresenter>;
};
