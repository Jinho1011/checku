import React, {useState, useEffect} from 'react';

import {user, gradeAll, gradeNow} from '../../api';
import {getData, storeData} from '../../storage';
import GradePresenter from './GradePresenter';

const isJson = str => {
  try {
    var json = JSON.parse(str);
    return typeof json === 'object';
  } catch (e) {
    return false;
  }
};

export default () => {
  const [stdNo, setStdNo] = useState('');
  const [shtms, setShtms] = useState([]);
  const [loadShtms, setLoadShtms] = useState(false);
  const [courses, setCourses] = useState({});
  const [loadCourses, setLoadCourses] = useState(false);
  const [avgs, setAvgs] = useState([]);
  const [loadAvgs, setLoadAvgs] = useState(false);

  const initCourses = () => {
    let COURSES = {};

    shtms.map(async shtm => {
      let nowShtmCourses = await gradeNow(shtm.REG_YY, shtm.REG_SHTM, stdNo);

      if (isJson(nowShtmCourses)) {
        nowShtmCourses = JSON.parse(nowShtmCourses);
        nowShtmCourses = nowShtmCourses['DS_GRADEOFSTUDENT'];
      } else console.error('nowShtmCourses is not JSON');

      COURSES[shtm.REG_YY] = {
        ...COURSES[shtm.REG_YY],
        [shtm.REG_SHTM]: nowShtmCourses,
      };
    });

    setCourses(COURSES);

    setLoadCourses(true);
  };

  const initAvgs = async () => {
    let totalGrades = await gradeAll(stdNo);

    if (isJson(totalGrades)) totalGrades = JSON.parse(totalGrades);
    else console.error('totalGrades is not JSON');

    totalGrades.map(grade => {
      if (grade.HAKSU_ID == null) {
        setAvgs(avgs => [...avgs, grade]);
      }
    });

    setLoadAvgs(true);
  };

  useEffect(() => {
    const init = async () => {
      let stdNo = await getData('@STDNO');
      let shtms = await getData('@SHTMS');
      let courses = await getData('@COURSES');
      let avgs = await getData('@AVGS');

      setStdNo(stdNo);
      setShtms(shtms);
      setCourses(courses);
      setAvgs(avgs);
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      let USER = await user(stdNo);
      USER = JSON.parse(USER);
      let REGIST_SHTMS = USER['DS_TUIT100'];

      REGIST_SHTMS.map(SHTM => {
        setShtms(shtms => [
          ...shtms,
          {REG_YY: SHTM.REG_YY, REG_SHTM: SHTM.REG_SHTM},
        ]);
      });

      setLoadShtms(true);
    };
    if (stdNo != '' && !loadShtms) init();
  }, [stdNo]);

  useEffect(() => {
    const init = async () => {
      storeData('@SHTMS', shtms);

      initCourses();
      initAvgs();
    };
    if (loadShtms && !loadCourses && !loadAvgs) init();
  }, [loadShtms]);

  useEffect(() => {
    if (loadCourses && loadAvgs) {
      storeData('@COURSES', courses);
      storeData('@AVGS', avgs);
    }
  }, [loadCourses, loadAvgs]);

  return (
    <GradePresenter
      shtms={shtms}
      courses={courses}
      avgs={avgs}></GradePresenter>
  );
};
