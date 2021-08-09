import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';

import {Container, ScrollContainer} from '../components';

const Title = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 26px;
  line-height: 38px;
  color: #333333;
`;

const SubTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  line-height: 23px;
  color: #666666;
  padding-top: 22px;
`;

const InputContainer = styled.View`
  padding-top: 42px;
`;

const InputTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 14px;
  line-height: 17px;
  color: #666666;
`;

const InputText = styled.TextInput`
  padding: 16px;
  margin-top: 14px;
  margin-bottom: 24px;
  background: #f1f6f4;
  border-radius: 5px;

  font-size: 16px;
  line-height: 23px;
  color: #666666;
`;

const LoginButton = styled.TouchableOpacity`
  flex: 1;
  margin-top: 24px;
  padding-top: 14px;
  padding-bottom: 14px;
  background: #00ca64;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
`;

export default ({setId, setPwd, onSubmit}) => {
  return (
    <ScrollContainer>
      <Container>
        <Title>로그인</Title>
        <SubTitle>포탈 아이디와 비밀번호를 입력해주세요.</SubTitle>
        <InputContainer>
          <InputTitle>아이디</InputTitle>
          <InputText secureTextEntry={false} onChangeText={setId} />
          <InputTitle>비밀번호</InputTitle>
          <InputText secureTextEntry={true} onChangeText={setPwd} />
          <LoginButton
            onPress={onSubmit}
            style={{
              ...Platform.select({
                ios: {
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.1,
                  shadowRadius: 10,
                },
                android: {
                  elevation: 8,
                },
              }),
            }}>
            <LoginButtonText>로그인</LoginButtonText>
          </LoginButton>
        </InputContainer>
      </Container>
    </ScrollContainer>
  );
};
