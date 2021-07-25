import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {Container} from '../components';
import ShtmPicker from './ShtmPicker';

const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
    </Container>
  );
};
