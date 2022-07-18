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
        selectedRowStyle={{ backgroundColor: '#D3D3D3', }}
        selectedRowTextStyle={{ backgroundColor: '#D3D3D3', marginTop: 5, fontSize: 14, color: "#000" }}
        buttonStyle={{  marginTop: 'auto',  }}
        dropdownStyle={{ backgroundColor: '#D3D3D3' ,marginRight: 'auto' }}
        rowStyle={{ backgroundColor: '#D3D3D3' ,marginRight: 'auto', paddingBottom:10, paddingTop:10,  }}
        rowTextStyle={{  backgroundColor: '#D3D3D3' , fontSize: 20,marginRight: 'auto', color: "#000" }}
        buttonTextStyle={{ marginRight: 'auto',fontSize: 15, marginTop: 'auto', color: "#000" }}
        statusBarTranslucent={false}
        
        dropdownOverlayColor={'#D3D3D3'}
        dropdownBackgroundColor={'#D3D3D3'}

        disableAutoScroll={true}
        renderDropdownIcon={seta}
        disabled={false}
        data={options}
        search={true}
        
       // dropdownStyle={styles.select}
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