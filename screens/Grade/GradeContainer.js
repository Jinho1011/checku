import React, {useState, useEffect} from 'react';
import * as Keychain from 'react-native-keychain';

import {gradeAll} from '../../api';
import {getData, storeData} from '../../storage';
import GradePresenter from './GradePresenter';

export default () => {
  const [grades, setGrades] = useState({});

  const initGrades = GRADES => {
    const gradeObj = {};

    GRADES.map(GRADE => {
      // if 과목
      if (GRADE.HAKSU_ID != null) {
        let prev = gradeObj[GRADE.YY]?.[GRADE.SHTM];
        let gradeArr = [];

        if (prev != null) {
          gradeArr = [...prev, GRADE];
        }

        gradeObj[GRADE.YY] = {
          ...gradeObj[GRADE.YY],
          [GRADE.SHTM]: gradeArr,
        };
      }
      // else if 학기 평균
      else if (GRADE.SHTM != null) {
        // console.log('나는 학기 평균');
      }
      // else if 전체 평균
      else {
        // console.log('나는 전체 평균');
      }
    });
    setGrades(gradeObj);
    storeData('@grades', gradeObj);
  };

  useEffect(() => {
    const init = async () => {
      let {stdNo} = await getData('@stdNo');
      let GRADES = JSON.parse(await gradeAll(stdNo));
      let storedGrades = await getData('@grades');

      if (storedGrades != null) setGrades(storedGrades);
      initGrades(GRADES);
    };
    init();
  }, []);

  return <GradePresenter grades={grades}></GradePresenter>;
};
