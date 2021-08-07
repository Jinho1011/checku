import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Entypo';

import {getData} from '../../storage';

const getLabel = shtm => {
  let shtmName;

  switch (shtm.REG_SHTM) {
    case 'B01011':
      shtmName = '1학기';
      break;
    case 'B01012':
      shtmName = '2학기';
      break;
  }

  return shtm.REG_YY + '년 ' + shtmName;
};

export default ({shtms, loadShtms, setSelected}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [loadItems, setLoadItems] = useState(false);
  const [placeholder, setPlaceholder] = useState('');

  const styles = StyleSheet.create({
    style: {
      borderWidth: 0,
      backgroundColor: '#00CA64',
    },
    containerStyle: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.14,
      shadowRadius: 4.0,

      elevation: 4,
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
      paddingBottom: 10,
      paddingTop: 10,
    },
  });

  useEffect(() => {
    const init = async () => {
      let latest = await getData('@LATEST');
      setPlaceholder(getLabel(latest));
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      shtms.map(shtm => {
        let label = getLabel(shtm);

        setItems(items => [
          ...items,
          {
            label: label,
            value: label,
            data: shtm,
          },
        ]);
      });

      setLoadItems(true);
    };

    if (shtms.length && !loadItems) init();
  }, [loadShtms]);

  useEffect(() => {
    if (value != null) {
      items.map(item => {
        if (value == item.label) setSelected(item.data);
      });
    }
  }, [value]);

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
