import React from 'react'

import { View , TouchableOpacity} from 'react-native'

interface RadioButtonProps{
    options: any;
    horizantal: string;
    sendData: Function;
   
}

const RadioBT: React.FC<RadioButtonProps> = ({ options, horizantal,sendData}) => {
    
    return (
       options.map((opt:any)=>
        (
            <View>
                {opt}
            </View>

        )
       )
    )
}

export default RadioBT