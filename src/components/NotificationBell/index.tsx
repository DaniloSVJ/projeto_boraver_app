import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Bell from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from 'react-native-vector-icons/MaterialCommunityIcons'

interface BellNotification {
    qtd: number;
}

const NotificationBell: React.FC<BellNotification> = ({ qtd }) => {
    const [alertBell, setAlertBell] = useState("#9370DB")

    useEffect(() => {
        async function reload() {
            if (qtd > 0) {
                setAlertBell("#FFFFFF")

            }
        }
        reload()
    }, [])
    const styles = StyleSheet.create({
        Text: {
            fontSize: 8,
            color: '#fff',
            marginTop: -13,
            textAlign:'center',
           
        },
        TextDown:{
            fontSize: 6,
            color: '#fff',
            marginTop: -12,
            textAlign:'right',
            marginRight: 2.5
        },
        Circle: {
            
            flex: 1,
            
        },
        Continer:{
            marginTop: 20,
        },
        Content:{
            width:14,
            alignSelf: 'flex-end',
            marginRight: -4

        },
        Bell:{
            marginTop: -7
        }



    })
    return (
        <View style={styles.Continer}>
            {
                qtd
                &&
                <View style={styles.Content}>
                   <Circle style={styles.Circle}  name="circle" color={'red'} size={14} />
                        <Text style={(qtd>99)?styles.TextDown:styles.Text}>
                            {
                                (qtd>99)
                                ? "+99"
                                : String(qtd)
                                
                            }
                        </Text>
                    
                         
                   
                </View>
            }
            <Bell style={styles.Bell} name="bell" color={alertBell} size={22} />
        </View>
    )

}


export default NotificationBell