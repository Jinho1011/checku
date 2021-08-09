import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {getData} from '../../storage';

import {ScrollContainer, Container, Divider} from '../components';
import ShtmPicker from './ShtmPicker';
import ModalSelector from './ModalSelector';

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 38px;
`;

const Title = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 26px;
  line-height: 38px;
  color: #333333;
`;

const SettingBtn = styled.TouchableOpacity`
  padding: 16px;
`;

const SettingText = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 23px;
  color: #666666;
`;

const CourseContainer = styled.View`
  margin-top: 24px;
  margin-bottom: 32px;
`;

const CoursesTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const GradesTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 17px;
  color: #666666;
`;

const GradesTitle2 = styled.Text`
  padding-right: 8px;
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 17px;
  color: #666666;
`;

const Courses = styled.View``;

const Course = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const CourseTitle = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

const CourseGradeContainer = styled.View`
  width: 40px;
  height: 40px;
  background-color: #f1f6f4;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

const CourseGrade = styled.Text`
  font-family: 'NotoSansKR-Medium';
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

const AvgContainer = styled.View`
  flex-direction: row;
  padding: 20px 0;
  border-radius: 6px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f1f6f4;
`;

const Avg = styled.View`
  align-items: center;
`;

const AvgTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 12px;
  line-height: 17px;
  color: #666666;
  padding-bottom: 6px;
`;

const AvgNumber = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  line-height: 23px;
  color: #000000;
`;

const GradePresenter = ({shtms, loadShtms, courses, avgs}) => {
  const [selected, setSelected] = useState({});
  const [selectedCourse, setSelectedCourse] = useState({});

  useEffect(() => {
    const init = async () => {
      let latest = await getData('@LATEST');
      setSelected(latest);
    };
    init();
  }, []);

  useEffect(() => {
    if (loadShtms) setSelected(shtms[0]);
  }, [loadShtms]);

  useEffect(() => {}, [selected]);

  return (
    <ScrollContainer>
      <Container>
        <TitleContainer>
          <Title>성적</Title>
          <SettingBtn>
            <SettingText>설정</SettingText>
          </SettingBtn>
        </TitleContainer>
        <ModalSelector
          shtms={shtms}
          loadShtms={loadShtms}
          setSelected={setSelected}></ModalSelector>

        {/* <ShtmPicker
        shtms={shtms}
        loadShtms={loadShtms}
        setSelected={setSelected}></ShtmPicker> */}
        <CourseContainer>
          <CoursesTitleContainer>
            <GradesTitle>과목명</GradesTitle>
            <GradesTitle2>등급</GradesTitle2>
          </CoursesTitleContainer>
          <Courses>
            {courses?.[selected.REG_YY]?.[selected.REG_SHTM].map(course => {
              return (
                <Course key={course.HAKSU_ID}>
                  <CourseTitle>{course.TYPL_KOR_NM}</CourseTitle>
                  <CourseGradeContainer>
                    <CourseGrade>{course.CALCU_GRD}</CourseGrade>
                  </CourseGradeContainer>
                </Course>
              );
            })}
          </Courses>
          <AvgContainer>
            {/* <Avg>
            <AvgTitle>신청학점</AvgTitle>
            <AvgNumber>{avg.DETM_CD}</AvgNumber>
          </Avg>
          <Avg>
            <AvgTitle>평점평균</AvgTitle>
            <AvgNumber>{avg.POBT_DIV}</AvgNumber>
          </Avg> */}
          </AvgContainer>
        </CourseContainer>
        <Divider></Divider>
      </Container>
    </ScrollContainer>
  );
};

export default React.memo(GradePresenter);
