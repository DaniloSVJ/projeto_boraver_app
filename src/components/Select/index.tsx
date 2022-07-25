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
      paddingRight: 'auto',
      marginBottom: 16,
      backgroundColor:'#F0FFFF',
      color: "#3C2E54",
      // borderWidth: 1,
      // borderStyle: 'solid',
      // borderColor: "",
      borderRadius: 12,
      paddingLeft:40,
      paddingTop: 0,
      paddingBottom: 0
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
        selectedRowStyle={{  backgroundColor: '#F0FFFF', }}
        selectedRowTextStyle={{  backgroundColor: '#F0FFFF',  fontSize: 14, color: '#3C2E54', }}
        buttonStyle={{ backgroundColor: '#F0FFFF', marginTop: 'auto',  }}
        dropdownStyle={{backgroundColor: '#F0FFFF' ,marginRight: 'auto' }}
        rowStyle={{ backgroundColor: '#F0FFFF' ,marginRight: 'auto', paddingBottom:10, paddingTop:0,  }}
        rowTextStyle={{  backgroundColor: '#F0FFFF' , fontSize: 20,color: '#3C2E54',marginRight: 'auto',  }}
        buttonTextStyle={{ backgroundColor: '#F0FFFF', marginRight: 'auto',color: '#3C2E54',fontSize: 15,  }}
        statusBarTranslucent={true}
        
        
       

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