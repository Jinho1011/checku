import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Platform,
  Animated,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {getData} from '../../storage';

let WIDTH = Dimensions.get('window').width;
let HEIGHT = Dimensions.get('window').height;

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

const ModalContainer = styled.View`
  background-color: #ffffff;
  padding: 20px;
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

const ModalItems = styled.ScrollView`
  height: 200px;
  padding-top: 20px;
`;

const ModalItem = styled.Pressable``;

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
  Background: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  fadingContainer: {
    flex: 1,
    height: HEIGHT,
    marginTop: -104,
    position: 'absolute',
    zIndex: 10,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
  },
});

export default ({shtms, loadShtms, selected, setSelected}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItem] = useState([]);
  const [placeholder, setPlaceholder] = useState('');

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const getLabel = shtm => {
    let shtmName;

    switch (shtm.REG_SHTM) {
      case 'B01011':
        shtmName = '1학기';
        break;
      case 'B01012':
        shtmName = '2학기';
        break;
      case 'B01014':
        shtmName = '하계 계절학기';
        break;
      case 'B01015':
        shtmName = '동계 계절학기';
        break;
    }

    return shtm.REG_YY + '년 ' + shtmName;
  };

  const fadeIn = () => {
    Animated.spring(fadeAnim, {
      toValue: 0.6,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (modalVisible) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [modalVisible]);

  useEffect(() => {}, [items]);

  useEffect(() => {
    const init = async () => {
      let latest = await getData('@LATEST');
      setPlaceholder(getLabel(latest));
    };
    init();
  }, []);

  useEffect(() => {
    if (shtms.length) {
      let index = 0;
      const newItem = shtms.map(shtm => {
        return {
          label: getLabel(shtm),
          data: shtm,
          key: index++,
        };
      });
      setItem(newItem);
    }
  }, [loadShtms]);

  const ModalItemText = styled.Text`
    font-family: 'NotoSansKR-Regular';
    font-size: 18px;
    padding-bottom: 18px;
    color: ${props => {
      if (props.data == selected) return '#00CA64';
      else return '#606b77';
    }};
  `;

  return (
    <>
      <SelectorContainer>
        <ShowModalPress
          onPress={() => setModalVisible(true)}
          style={styles.shadowBox}>
          <ShowModalText>{placeholder}</ShowModalText>
        </ShowModalPress>
      </SelectorContainer>
      {modalVisible ? (
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              opacity: fadeAnim,
            },
          ]}
        />
      ) : null}
      <Modal
        style={[styles.shadowBox, styles.Background]}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
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
          <ModalItems>
            {items.map(item => {
              return (
                <ModalItem
                  key={item.key}
                  onPress={() => {
                    setSelected(item.data);
                    setPlaceholder(item.label);
                  }}>
                  <ModalItemText data={item.data}>{item.label}</ModalItemText>
                </ModalItem>
              );
            })}
          </ModalItems>
        </ModalContainer>
      </Modal>
    </>
  );
};
