import React, {useState, useEffect} from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {getData} from '../../storage';

const SelectorContainer = styled.View``;

const ShowModalPress = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #00ca64;
  padding: 10px;
  border-radius: 6px;
`;

const ShowModalText = styled.Text`
  color: #fff;
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
`;

const ModalContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  padding-bottom: 240px;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const styles = StyleSheet.create({
  PressBtn: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  Modal: {
    justifyContent: 'flex-end',
    margin: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

export default () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SelectorContainer style>
      <Modal
        style={styles.Modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ModalContainer>
          <Text>Show Modal</Text>
        </ModalContainer>
      </Modal>
      <ShowModalPress
        onPress={() => setModalVisible(true)}
        style={styles.PressBtn}>
        <ShowModalText>2021년 1학기</ShowModalText>
        <ShowModalText>{'>'}</ShowModalText>
      </ShowModalPress>
    </SelectorContainer>
  );
};
