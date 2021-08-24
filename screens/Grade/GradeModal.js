import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

const ModalContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 20px;
`;

const GradeTitle = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 20px;
  color: #000000;
  padding-bottom: 20px;
`;

const LabelContainer = styled.View`
  flex-direction: row;
  padding-bottom: 16px;
`;

const LabelTitle = styled.Text`
  font-family: 'NotoSansKR-Regular';
  width: 80px;
  font-size: 16px;
  color: #666666;
`;

const LabelContent = styled.Text`
  font-family: 'NotoSansKR-Regular';
  font-size: 16px;
  color: #000000;
`;

const ClosePress = styled.Pressable`
  background-color: #00ca64;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 12px 0;
  border-radius: 10px;
`;

const CloseText = styled.Text`
  font-family: 'NotoSansKR-Bold';
  font-size: 16px;
  color: #ffffff;
`;

const GradeModal = ({showModal, setShowModal, selectedCourse}) => {
  return (
    <Modal isVisible={showModal} onBackdropPress={() => setShowModal(false)}>
      <ModalContainer>
        <GradeTitle>{selectedCourse.TYPL_KOR_NM}</GradeTitle>
        <LabelContainer>
          <LabelTitle>담당교수</LabelTitle>
          <LabelContent>{selectedCourse.KOR_NM}</LabelContent>
        </LabelContainer>
        <LabelContainer>
          <LabelTitle>과목번호</LabelTitle>
          <LabelContent>{selectedCourse.SBJT_ID}</LabelContent>
        </LabelContainer>
        <LabelContainer>
          <LabelTitle>학점</LabelTitle>
          <LabelContent>{selectedCourse.PNT}</LabelContent>
        </LabelContainer>
        <LabelContainer>
          <LabelTitle>이수구분</LabelTitle>
          <LabelContent>{selectedCourse.POBT_NM}</LabelContent>
        </LabelContainer>
        <LabelContainer>
          <LabelTitle>평가방법</LabelTitle>
          <LabelContent>{selectedCourse.APPR_MTHD_CD}</LabelContent>
        </LabelContainer>
        <ClosePress
          onPress={() => setShowModal(false)}
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          <CloseText>확인</CloseText>
        </ClosePress>
      </ModalContainer>
    </Modal>
  );
};

export default GradeModal;
