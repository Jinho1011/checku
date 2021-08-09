import {Platform, Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

let deviceWidth = Dimensions.get('window').width;

export const ScrollContainer = styled.ScrollView`
  ${Platform.select({
    ios: css`
      padding-top: 104px;
    `,
    android: css`
      padding-top: 52px;
      padding-bottom: 52px;
    `,
  })};
  background-color: #fff;
`;

export const Container = styled.View`
  ${Platform.select({
    ios: css``,
    android: css`
      padding-bottom: 52px;
    `,
  })};
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const Divider = styled.View`
  margin-left: -16px;
  width: ${deviceWidth}px;
  height: 16px;
  background-color: #f1f6f4;
`;
