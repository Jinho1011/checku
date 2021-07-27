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
      if (GRADE.HAKSU_ID != null) {
        let prev = gradeObj[GRADE.YY]?.[GRADE.SHTM]?.COURSES;
        let gradeArr = [];

        if (prev != null) {
          gradeArr = [...prev, GRADE];
        }

        gradeObj[GRADE.YY] = {
          ...gradeObj[GRADE.YY],
          [GRADE.SHTM]: {
            COURSES: gradeArr,
          },
        };
      } else if (GRADE.SHTM != null) {
        gradeObj[GRADE.YY] = {
          ...gradeObj[GRADE.YY],
          [GRADE.SHTM]: {
            ...gradeObj[GRADE.YY][GRADE.SHTM],
            AVG: GRADE,
          },
        };
      } else {
        gradeObj['AVG'] = GRADE;
      }
    });

    setGrades(gradeObj);
    storeData('@grades', gradeObj);
  };

  useEffect(() => {
    const init = async () => {
      try {
        let stdNo = await getData('@stdNo');
        let GRADES = JSON.parse(await gradeAll(stdNo));
        let storedGrades = await getData('@grades');

        if (storedGrades != null) setGrades(storedGrades);
        initGrades(GRADES);
      } catch (error) {
        throw error;
      }
    };
    init();
  }, []);

  return <GradePresenter grades={grades}></GradePresenter>;
};
