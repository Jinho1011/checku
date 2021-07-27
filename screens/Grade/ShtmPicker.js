import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Entypo';

export default ({grades, setSelected}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState('2021년 1학기');
  const [margin, setMargin] = useState(0);
  const [items, setItems] = useState([]);

  const styles = StyleSheet.create({
    style: {
      borderWidth: 0,
      backgroundColor: '#00CA64',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    containerStyle: {
      marginBottom: margin,
    },
    dropDownContainerStyle: {
      borderWidth: 0,
      backgroundColor: '#fff',
      marginTop: 4,
    },
    textStyle: {
      color: '#fff',
      fontFamily: 'NotoSansKR-Medium',
    },
    listItemLabelStyle: {
      color: '#000',
      fontFamily: 'NotoSansKR-Medium',
    },
  });

  useEffect(() => {
    if (value != null) {
      items.map(item => {
        if (value == item.label) setSelected(item.data);
      });
    }
  }, [value]);

  useEffect(() => {
    if (open) {
      const itemCnt = items.length;
      setMargin(itemCnt * 36 + 6);
    } else {
      setMargin(0);
    }
  }, [open]);

  useEffect(() => {
    if (Object.keys(grades).length != 0 && items.length == 0) {
      for (const year in grades) {
        if (year != 'AVG') {
          for (const shtm in grades[year]) {
            let SHTM_KR;
            if (shtm == 'B01011') SHTM_KR = '1학기';
            else if (shtm == 'B01012') SHTM_KR = '2학기';
            const label = year + '년 ' + SHTM_KR;

            setItems(prev => [
              {
                label: label,
                value: label,
                data: {
                  year: year,
                  shtm: shtm,
                },
              },
              ...prev,
            ]);
          }
        }
      }
    }
  });

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder}
      listMode="SCROLLVIEW"
      style={styles.style}
      containerStyle={styles.containerStyle}
      dropDownContainerStyle={styles.dropDownContainerStyle}
      textStyle={styles.textStyle}
      listItemLabelStyle={styles.listItemLabelStyle}
      disableBorderRadius={false}
      showTickIcon={false}
      ArrowUpIconComponent={() => (
        <Icon name="chevron-up" size={24} color="#ffffff" />
      )}
      ArrowDownIconComponent={() => (
        <Icon name="chevron-down" size={24} color="#ffffff" />
      )}
    />
  );
};
