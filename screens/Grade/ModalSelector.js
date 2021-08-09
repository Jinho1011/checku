import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, StyleSheet, Platform} from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getData} from '../../storage';

const SelectorContainer = styled.View`
  overflow: visible;
`;

const ShowModalPress = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #00ca64;
  border-radius: 6px;
  overflow: visible;
  padding-top: ${Platform.OS === 'android' ? 6 : 14}px;
  padding-bottom: ${Platform.OS === 'android' ? 6 : 14}px;
  padding-left: ${Platform.OS === 'android' ? 12 : 14}px;
  padding-right: ${Platform.OS === 'android' ? 12 : 14}px;
`;

const ShowModalText = styled.Text`
  color: #fff;
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
`;

const Background = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0);
  justify-content: flex-end;
  margin: -20px;
  padding: 0;
`;

const ModalContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  padding-bottom: 240px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ModalTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 18px;
`;

const ModalClose = styled.Pressable``;

const styles = StyleSheet.create({
  shadowBox: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
          height: 3,
          width: 0,
        },
      },
      android: {
        elevation: 10,
      },
    }),
  },
});

export default () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <SelectorContainer>
        <ShowModalPress
          onPress={() => setModalVisible(true)}
          style={styles.shadowBox}>
          <ShowModalText>2021년 1학기</ShowModalText>
        </ShowModalPress>
      </SelectorContainer>
      <Modal
        style={styles.shadowBox}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Background>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>학기 선택하기</ModalTitle>
              <ModalClose onPress={() => setModalVisible(false)}>
                <Ionicons
                  name="md-close-outline"
                  size={24}
                  color="#000"></Ionicons>
              </ModalClose>
            </ModalHeader>
          </ModalContainer>
        </Background>
      </Modal>
    </>
  );
};
