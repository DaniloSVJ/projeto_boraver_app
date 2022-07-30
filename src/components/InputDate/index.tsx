import React, {
    useState,
    useCallback,
    useEffect,
    useRef,
    useImperativeHandle,
    forwardRef,
    
  } from 'react';
  
  import { TextInputProps,Image } from 'react-native';
  import { useField } from '@unform/core';
  
  import { Container,  Icon,TextInput } from './styles';
  import IconDateInput from '../../assets/iconDateInput.svg'
  interface InputProps extends TextInputProps {
    name: string;
   
    
  }
  
  interface InputValueReference {
    value: string;
  }
  
  interface InputRef {
    focus(): void;
  }
  
  const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    { name, ...rest },
    ref, 
  ) => {
    
    
    const [seePassword,setSeePassword] = useState(false)
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
   
    
   
    return (
      <Container  isFocused={isFocused} isErrored={!!error}>
        <TextInput
          ref={inputElementRef}
          keyboardAppearance="dark"
          placeholderTextColor="#000"
          
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value: string) => {
            inputValueRef.current.value = value;
          }}
          
          {...rest}
     
        />
        <Image
          source={IconDateInput}
         
        />
      </Container>
    );
  };
  
  export default forwardRef(Input);