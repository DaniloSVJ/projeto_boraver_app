import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
} from 'react'
import { useFocusEffect } from '@react-navigation/native';

import { View,Text, TextInputProps, StyleSheet } from 'react-native'
import { ViewEdit, Label, TextDataPerfil } from './styles'
import { RectButton } from 'react-native-gesture-handler';
import { useField } from '@unform/core';

interface EditProps {
    label: string;
    text: string;
    valid: boolean;

}
interface InputValueReference {
    value: string;
}
interface InputProps extends TextInputProps {
    name: string;
    containerStyle?: object;
    label: string;
    text: string;
    weight:string;
    valid: boolean;
    sendData: Function;
    
}
interface InputRef {
    focus(): void;

}
const VEdit: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, text,weight,label,valid, sendData, containerStyle = {}, ...rest },
    ref  ) => {

    const inputElementRef = useRef<any>(null);
    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
    


    const [textinputvalue, setTextInputvalue] = useState(text)
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
      
    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputValueRef.current.value);
    }, []);
    useFocusEffect(
    useCallback(() => {
        inputValueRef.current.value = defaultValue;
        sendData(text)
      }, [defaultValue])
    )
      useImperativeHandle(ref, () => ({
        focus() {
          inputElementRef.current.focus();
        },
      }));

    useFocusEffect(
        useCallback(() => {
        inputValueRef.current.value = defaultValue;
    }, [defaultValue])
    )

    useFocusEffect(
  
        useCallback(() => {
            registerField<string>({
                name: fieldName,
                ref: inputValueRef.current,
                path: 'value',
                setValue(ref: any, value: string) {
                    inputValueRef.current.value = value;
                    inputElementRef.current.setNativeProps({ text: value });
                },
                clearValue(ref: any) {
                    inputValueRef.current.value = '';
                    inputElementRef.current.clear();
                },
            });
        }, [fieldName, registerField])
    )
    const styles = StyleSheet.create({
        AntDesignEye: {
            display: 'flex',
            marginTop: 31,
            marginLeft: 12,
            width: 60,
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 5,
            textAlign: 'center',
            padding: 3

        },
        AntDesignEyeSlash: {
            display: 'flex',
            marginTop: 31,
            marginLeft: 12,
            width: 60,
            color: 'white',
            textDecorationColor: 'white',
            backgroundColor:'#EEAEEE',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 5,
            textAlign: 'center',
            padding: 3
        },

    })

    return (
        
            <View>
                <Label>{label}:</Label>
                <TextDataPerfil
                    ref={inputElementRef}
                    value={textinputvalue}
                    defaultValue={defaultValue}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChangeText={(value: string) => {
                        setTextInputvalue(value)
                        sendData(value)
                    }}

                    editable={valid}
                    enabled={valid == false ?
                        false : true
                    }
                    weight={weight}
                    {...rest}
                />
            </View>
          
        
    )
}


export default forwardRef(VEdit)