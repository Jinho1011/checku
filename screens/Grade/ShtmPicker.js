import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';

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
  dropDownContainerStyle: {
    borderWidth: 0,
    backgroundColor: '#fff',
    marginTop: 4,
  },
});

export default ({grades}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState('2021년 1학기');
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  useEffect(() => {
    // if object is not empty
    if (Object.keys(grades).length != 0) {
      for (const year in grades) {
        console.log(year);
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
      dropDownContainerStyle={styles.dropDownContainerStyle}
      textStyle={{color: '#fff'}}
      listItemLabelStyle={{color: '#000'}}
      disableBorderRadius={false}
      showTickIcon={false}
      ArrowUpIconComponent={({style}) => (
        <Icon name="rocket" size={30} color="#900" />
      )}
    />
  );
};
