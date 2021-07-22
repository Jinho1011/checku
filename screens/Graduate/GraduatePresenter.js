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
          fontFamily: 'NotoSansKR-Thin',
          fontSize: 28,
          letterSpacing: 0,
        }}>
        Graduate Screen
      </Text>
    </View>
  );
};
