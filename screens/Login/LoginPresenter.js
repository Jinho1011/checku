import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import styled from "styled-components/native";

export default () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'NotoSansKR-Regular',
          fontSize: 14,
          letterSpacing: 0,
        }}>
        안녕하세요
      </Text>
    </View>
  );
};
