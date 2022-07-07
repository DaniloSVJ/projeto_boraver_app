import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    
  } from 'react';
  import { TextInputMask } from 'react-native-masked-text'

  import { TextInputProps ,StyleSheet} from 'react-native';
  import { useField } from '@unform/core';
  
  import { Container ,TextInput} from './styles';
  
  interface InputProps extends TextInputProps {
    name: string;
    mask: string;
    
    containerStyle?: object;
  }
  
  interface InputValueReference {
    value: string;
  }
  
  interface InputRef {
    focus(): void;
  }
  
  const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name,  mask,containerStyle = {}, ...rest },
    ref, 
  ) => {
    
    const inputElementRef = useRef<any>(null);

    const { registerField, defaultValue = '', fieldName, error } = useField(name);
    const inputValueRef = useRef<InputValueReference>({ value: defaultValue });
  
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
  
    const handleInputFocus = useCallback(() => {
      setIsFocused(true);
    }, []);
  
    const handleInputBlur = useCallback(() => {
      setIsFocused(false);
  
      setIsFilled(!!inputValueRef.current.value);
    }, []);
  
    useEffect(() => {
      inputValueRef.current.value = defaultValue;
    }, [defaultValue]);
  
    useImperativeHandle(ref, () => ({
      focus() {
        inputElementRef.current.focus();
      },
    }));
  
    useEffect(() => {
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
    }, [fieldName, registerField]);
      

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            color:"#3C2E54",
            fontSize: 13,
            fontFamily: 'Montserrat_400Regular',
            border: 'none',
            borderColor: "#fff"  
        },
      
      });
    return (
      <Container style={containerStyle} isFocused={isFocused} isErrored={!!error}>
     
  
     <TextInput 
        style={styles.container}
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        type={mask}
        onChangeText={(value:string) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
        
      </Container>
    );
  };
  
  export default forwardRef(Input);