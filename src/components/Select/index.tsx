import { View, StyleSheet, FlatList, TouchableOpacity, Text, Dimensions, SafeAreaView, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'


interface Select {
  options: Array<string>;
  onChangeSelect: Function,
  marginR: number;
  marginL: number;
              
 

}

const { width } = Dimensions.get('window')
const Select: React.FC<Select> = ({ options, onChangeSelect,marginR,marginL }) => {
  const [opt,setOpt]=useState([])
  useEffect(()=>{
    setOpt([])

  },[])
  function seta() {
    return (
      <Entypo name="chevron-small-down" size={24} color="#5E448A" />
    )
  }
  const styles = StyleSheet.create({
  
    select: {
      width: 'auto',
      marginTop: 16,
      marginLeft: marginR,
      marginRight: marginL,
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
   
  })
  
  return (

    <View style={styles.select}>

      <SelectDropdown
        defaultButtonText=' '
        dropdownIconPosition={'right'}
        selectedRowStyle={{ backgroundColor: '#fff', }}
        selectedRowTextStyle={{ backgroundColor: '#fff', marginTop: 5, fontSize: 14, color: "#5E448A" }}
        buttonStyle={{ marginTop: 'auto', marginRight: 10 }}
        dropdownStyle={{ marginRight: 80 }}
        rowStyle={{ marginRight: 80, paddingBottom:10, paddingTop:10,  backgroundColor: '#fff' }}
        rowTextStyle={{ marginRight: 80, backgroundColor: '#fff', fontSize: 14, color: "#5E448A" }}
        buttonTextStyle={{ marginRight: 'auto', marginTop: 'auto', fontSize: 14, color: "#5E448A" }}
        statusBarTranslucent={false}
        renderDropdownIcon={seta}
        disabled={false}
        data={options}
        onSelect={(selectedItem, index) => {
          onChangeSelect(selectedItem)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
      />

    </View>

  );

}


export default Select;