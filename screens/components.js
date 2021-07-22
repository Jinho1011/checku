import {Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView`
  ${Platform.select({
    ios: css`
      padding-top: 104px;
    `,
    android: css`
      padding-top: 52px;
    `,
  })};
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 26px;
  line-height: 38px;
  color: #333333;
`;
