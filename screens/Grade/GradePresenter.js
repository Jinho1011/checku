import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
// import styled from "styled-components/native";

export default ({grades}) => {
  console.log(grades['2020']?.['B01012'][0]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'NotoSansKR-Thin',
          fontSize: 28,
          letterSpacing: 0,
        }}>
        Grade Screen
      </Text>
    </View>
  );
};
