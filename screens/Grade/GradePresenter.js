import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {Container, Divider} from '../components';
import ShtmPicker from './ShtmPicker';

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

export default ({grades}) => {
  // console.log(grades['2020']?.['B01012']);
  const [selected, setSelected] = useState({
    year: '2021',
    shtm: 'B01011',
  });
  const [courses, setCourses] = useState([]);
  const [avg, setAvg] = useState({});

  useEffect(() => {
    if (Object.keys(grades).length != 0) {
      setCourses(grades[selected.year][selected.shtm].COURSES);
      setAvg(grades[selected.year][selected.shtm].AVG);
    }
  });

  return (
    <Container nestedScrollEnabled={true}>
      <TitleContainer>
        <Title>성적</Title>
        <SettingBtn>
          <SettingText>설정</SettingText>
        </SettingBtn>
      </TitleContainer>
      <ShtmPicker grades={grades} setSelected={setSelected}></ShtmPicker>
      <CourseContainer>
        <CoursesTitleContainer>
          <GradesTitle>과목명</GradesTitle>
          <GradesTitle2>등급</GradesTitle2>
        </CoursesTitleContainer>
        <Courses>
          {courses.map(course => {
            return (
              <Course key={course.HAKSU_ID}>
                <CourseTitle>{course.HAKSU_NM}</CourseTitle>
                <CourseGradeContainer>
                  <CourseGrade>{course.GRD}</CourseGrade>
                </CourseGradeContainer>
              </Course>
            );
          })}
        </Courses>
        <AvgContainer>
          <Avg>
            <AvgTitle>신청학점</AvgTitle>
            <AvgNumber>{avg.DETM_CD}</AvgNumber>
          </Avg>
          <Avg>
            <AvgTitle>평점평균</AvgTitle>
            <AvgNumber>{avg.POBT_DIV}</AvgNumber>
          </Avg>
        </AvgContainer>
      </CourseContainer>
      <Divider></Divider>
    </Container>
  );
};
