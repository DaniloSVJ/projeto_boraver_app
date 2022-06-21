import React, { useCallback, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect } from '@react-navigation/native';

interface BellNotification {
    qtd: number;
}

const NotificationBell: React.FC<BellNotification> = ({ qtd }) => {
    const [alertBell, setAlertBell] = useState("#9370DB")
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
            marginTop: -7
        },
        Bell0: {
            marginTop: 3
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
            <Bell style={qtd>0?styles.Bell:styles.Bell0} name="bell" color={alertBell} size={22} />
        </View>
    )

}


export default NotificationBell