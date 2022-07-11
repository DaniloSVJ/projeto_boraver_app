import { View, StyleSheet,FlatList, TouchableOpacity, Text, Dimensions, SafeAreaView, Modal } from 'react-native';
import React, { useState } from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';


interface Select {
  options: [];
  onChangeSelect: Function,
  text: string;

}

const { width } = Dimensions.get('window')
const Select: React.FC<Select> = ({ options, onChangeSelect, text }) => {

  const [txt, setText] = useState(text)
  const [modalVisible, setModalViseble] = useState(false)
  function renderItem(item){
    return(
      <Text>item.name</Text>
    )
  } 
  return (

    <View >
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalViseble(true)}
      >
        <Text style={styles.txt} numberOfLines={1}>{txt}</Text>
        <Entypo name="chevron-small-down" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => setModalViseble(false)}
      >
        <SafeAreaView>
          <View>
            <TouchableOpacity onPress={() => setModalViseble(false)}>
              <Text>dffdfdfd</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{text}</Text>
            <TouchableOpacity onPress={() => setModalViseble(false)}>
              <Text style={styles.modalCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={options}
            keyExtractor={item=>String(item.id)}
            renderItem={({item})=>renderOption(item)}
          />
        </SafeAreaView>
      </Modal>

    </View>

  );

}

const styles = StyleSheet.create({
  txt: {
    color: '#555',
    fontSize: 16,
    marginRight: 36,
    width: width - 98,

  },
  container: {
    height: 50,
    flex: 1,
    backgroundColor: '#F7F9FA',
    paddingLeft: 40,
    mrginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:12,
    borderBottomColor:'#555',
    borderBottomWidth:1,
    paddingBottom:12
  },
  modalTitle: {
    fontSize:18,
    color:'#555',
  },
  modalCancel: {
    fontSize:18,
    color:'blue',
    fontWeight:'bold'
  }

})

export default Select;