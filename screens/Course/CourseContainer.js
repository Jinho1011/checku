import React, {useState, useEffect} from 'react';

import CoursePresenter from './CoursePresenter';
import {getShtm} from '../../api';

export default () => {
  const [shtm, setShtm] = useState('');

  useEffect(() => {
    const init = async () => {
      let shtm = await getShtm();
      shtm = JSON.parse(shtm).BASI_SHTM;
      setShtm(shtm);
    };
    init();
  }, []);

  useEffect(() => {
    console.log(shtm);
  }, [shtm]);

  return <CoursePresenter></CoursePresenter>;
};
