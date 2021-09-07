import React, {useState, useEffect} from 'react';

import CoursePresenter from './CoursePresenter';
import {getShtm, getYear} from '../../api';

export default () => {
  const [option, setOption] = useState({
    ltYy: '',
    ltShtm: '',
    pobtDiv: '',
    openSust: '',
    grade: '',
    corsKorNm: '',
    sbjtId: '',
  });

  const _setOption = (key, value) => {
    setOption(prevOption => ({...prevOption, [key]: value}));
  };

  const _setOptions = items => {
    items.map(item => {
      setOption(prevOption => ({...prevOption, [item.key]: item.value}));
    });
  };

  // Default
  // - 년도
  // - 학기코드

  // Modal Select
  // - 이수구분
  // - 학과 코드
  // - 학년

  // Search Input
  // - 과목명
  // - 과목코드

  useEffect(() => {
    const init = async () => {
      // 년도
      let shtm = await getShtm();
      // shtm = JSON.parse(shtm).BASI_SHTM;
      _setOption('ltShtm', shtm);

      // 학기 코드
      let year = await getYear();
      // year = JSON.parse(year).DS_SCOMSCHEDULEINQ[0].BASI_YY;
      _setOption('ltYy', year);
    };
    init();
  }, []);

  useEffect(() => {
    console.log(option);
  }, [option]);

  return <CoursePresenter></CoursePresenter>;
};
