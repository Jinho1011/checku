import React from 'react';
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

  return (
    <Container nestedScrollEnabled={true}>
      <TitleContainer>
        <Title>성적</Title>
        <SettingBtn>
          <SettingText>설정</SettingText>
        </SettingBtn>
      </TitleContainer>
      <ShtmPicker grades={grades}></ShtmPicker>
      <CourseContainer>
        <CoursesTitleContainer>
          <GradesTitle>과목명</GradesTitle>
          <GradesTitle2>등급</GradesTitle2>
        </CoursesTitleContainer>
        <Courses>
          <Course>
            <CourseTitle>웹프로그래밍</CourseTitle>
            <CourseGradeContainer>
              <CourseGrade>A+</CourseGrade>
            </CourseGradeContainer>
          </Course>
          <Course>
            <CourseTitle>확률과통계</CourseTitle>
            <CourseGradeContainer>
              <CourseGrade>A</CourseGrade>
            </CourseGradeContainer>
          </Course>
          <Course>
            <CourseTitle>자료구조</CourseTitle>
            <CourseGradeContainer>
              <CourseGrade>A+</CourseGrade>
            </CourseGradeContainer>
          </Course>
          <Course>
            <CourseTitle>객체지향프로그래밍</CourseTitle>
            <CourseGradeContainer>
              <CourseGrade>A+</CourseGrade>
            </CourseGradeContainer>
          </Course>
        </Courses>
        <AvgContainer>
          <Avg>
            <AvgTitle>신청학점</AvgTitle>
            <AvgNumber>18</AvgNumber>
          </Avg>
          <Avg>
            <AvgTitle>평점평균</AvgTitle>
            <AvgNumber>4.50</AvgNumber>
          </Avg>
          <Avg>
            <AvgTitle>석차</AvgTitle>
            <AvgNumber>1/185</AvgNumber>
          </Avg>
        </AvgContainer>
      </CourseContainer>
      <Divider></Divider>
    </Container>
  );
};
