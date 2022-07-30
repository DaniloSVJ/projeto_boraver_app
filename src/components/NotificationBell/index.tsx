import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet , Image} from 'react-native'
import Bell2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect } from '@react-navigation/native';
import BellW from '../../assets/bellwhite.svg'
import BellR from '../../assets/bellroxo.svg'

interface BellNotification {
    qtd: number;
}

const NotificationBell: React.FC<BellNotification> = ({ qtd }) => {
    const [alertBell, setAlertBell] = useState("#6959CD")
    useFocusEffect(
        useCallback(() => {
            async function reload() {
                if (qtd > 0) {
                    setAlertBell("#FFFFFF")

                }
            }
            reload()
        }, [qtd])
    )
    const styles = StyleSheet.create({
        Text: {
            fontSize: 8,
            color: '#fff',
            marginTop: -13,
            textAlign: 'center',

        },
        TextDown: {
            fontSize: 6,
            color: '#fff',
            marginTop: -12,
            textAlign: 'right',
            marginRight: 2.5
        },
        Circle: {

            flex: 1,

        },
        Continer: {
            marginTop: 20,
        },
        Content: {
            width: 14,
            alignSelf: 'flex-end',
            marginRight: -4

        },
        Bell: {
            marginTop: -7,
            width: 22,
            height: 24
        },
        Bell0: {
            marginTop: 3,
            width: 22,
            height: 24
        }



    })
    return (
        <View style={styles.Continer}>
            {
                qtd > 0
                    ?
                    <View style={styles.Content}>
                        <Circle style={styles.Circle} name="circle" color={'red'} size={14} />
                        <Text style={(qtd > 99) ? styles.TextDown : styles.Text}>
                            {
                                (qtd > 99)
                                    ? "+99"
                                    : String(qtd)

                            }
                        </Text>



                    </View>
                    :
                    <View style={styles.Content}>
                    </View>
            }
            {
                qtd>0?
               ( <Image style={styles.Bell} source={BellW}/>)
                // (<BellW style={styles.Bell} />)
                :
                (<Image  style={styles.Bell0} source={BellR}/>)
                // (<BellR style={styles.Bell0} />)
            }
            
        </View>
    )

}


export default NotificationBell