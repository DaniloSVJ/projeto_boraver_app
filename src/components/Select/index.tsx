import { View, StyleSheet, FlatList, TouchableOpacity, Text, Dimensions, SafeAreaView, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'


interface Select {
  options: Array<string>;
  onChangeSelect: Function,
              
 

}

const { width } = Dimensions.get('window')
const Select: React.FC<Select> = ({ options, onChangeSelect }) => {
  const [opt,setOpt]=useState([])
  useEffect(()=>{
    setOpt([])

  },[])
  function seta() {
    return (
      <Entypo name="chevron-small-down" size={24} color="#5E448A" />
    )
  }

  return (

    <View style={styles.select}>

      <SelectDropdown
        defaultButtonText=' '
        dropdownIconPosition={'right'}
        
        selectedRowStyle={{ backgroundColor: '#fff', }}
        selectedRowTextStyle={{ backgroundColor: '#fff', marginTop: 5, fontSize: 20, color: "#5E448A" }}
        buttonStyle={{ marginTop: 'auto', marginRight: 10 }}
        dropdownStyle={{ marginRight: 80 }}
        rowStyle={{ marginRight: 80, paddingBottom:10, paddingTop:10,  backgroundColor: '#fff' }}
        rowTextStyle={{ marginRight: 80, backgroundColor: '#fff', fontSize: 18, color: "#5E448A" }}
        buttonTextStyle={{ marginRight: 'auto', marginTop: 'auto', fontSize: 18, color: "#5E448A" }}
        statusBarTranslucent={false}
        renderDropdownIcon={seta}
        //renderDropdownIcon={<Entypo name="chevron-small-down" size={24} color="black" />}
        disabled={false}
        data={options}
        onSelect={(selectedItem, index) => {
          onChangeSelect(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />

    </View>

  );

}

const styles = StyleSheet.create({
  // txt: {
  //   color: '#555',
  //   fontSize: 16,
  //   marginRight: 36,
  //   width: width - 98,

  // },
  select: {
    width: 'auto',
    marginTop: 16,
    marginLeft: 54,
    marginRight: 58,
    paddingRight: 10,
    marginBottom: 16,
    color: "#3C2E54",
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "#808080",
    borderRadius: 12,
    paddingLeft: 25,
    paddingTop: 12,
    paddingBottom: 12
  },
  selectText: {
    textAlign: 'right'
  },
  // container: {
  //   height: 50,
  //   flex: 1,
  //   backgroundColor: '#F7F9FA',
  //   paddingLeft: 40,
  //   mrginHorizontal: 20,
  //   borderRadius: 8,
  //   fontSize: 18,
  //   borderWidth: 1,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // header: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   paddingHorizontal: 12,
  //   borderBottomColor: '#555',
  //   borderBottomWidth: 1,
  //   paddingBottom: 12
  // },
  // modalTitle: {
  //   fontSize: 18,
  //   color: '#555',
  // },
  // modalCancel: {
  //   fontSize: 18,
  //   color: 'blue',
  //   fontWeight: 'bold'
  // }

})

export default Select;